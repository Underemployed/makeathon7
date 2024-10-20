const User = require('../models/userSchema');
require("dotenv").config();
const mongoose = require("mongoose");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// mongoose.connect(process.env.MONGO_URI, {
//     serverSelectionTimeoutMS: 5000 // Increase timeout to 5 seconds
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });

const getChatHistory = async (userId) => {
    try {
        let query;
        if (mongoose.Types.ObjectId.isValid(userId)) {
            query = { _id: userId };
        } else {
            query = { userName: userId };
        }
        const user = await User.findOne(query);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        console.error("Error fetching chat history:", error);
        throw error;
    }
};

const aiEnvironment = (chatSummary, username) => {
    return `
    You are a women support, service, public helper. Your friend ${username} needs you;
    here is the chat history: ${chatSummary}
    `.trim();
};

const cleanResponse = (mes) => {
    return mes;
};

const updateChatSummary = async (chathistory) => {
    try {
        const result = await model.generateContent(chathistory);
        const newSummary = result.response.text();
        return newSummary;
    } catch (error) {
        console.error("Error updating chat summary:", error);
        throw error;
    }
};

const getAIResponse = async (userMessage, userId) => {
    try {
        const user = await getChatHistory(userId);
        if (!user) {
            throw new Error("User not found");
        }
        const chatSummary = user.chatSummary || '';
        const prompt = aiEnvironment(chatSummary, user.userName);

        const result = await model.generateContent(prompt + "\n\nUser: " + userMessage);
        const aiResponse = result.response.text();
        
        const currentTime = new Date().toISOString();
        user.chatSummary = (user.chatSummary || '') + `\n\n[${currentTime}] User: ${userMessage}\n[${currentTime}] AI: ${aiResponse}`;
        user.chatSummary = await updateChatSummary(user.chatSummary);
        await user.save();

        return cleanResponse(aiResponse);
    } catch (error) {
        console.error("Error getting AI response:", error);
        throw error;
    }
};

// Example usage
const main = async () => {
    try {
        // Use a valid username or ObjectId here
        const response = await getAIResponse("hi", "exampleUserName");
        console.log("AI Response:", response);
    } catch (error) {
        console.error("Error in main function:", error);
    } finally {
        // Close the MongoDB connection
        await mongoose.connection.close();
    }
};

// Create a test user if it doesn't exist
const createTestUser = async () => {
    try {
        const testUser = await User.findOne({ userName: "exampleUserName" });
        if (!testUser) {
            const newUser = new User({
                email: "example@example.com",
                password: "password123",
                userName: "exampleUserName",
                chatSummary: ""
            });
            await newUser.save();
            console.log("Test user created successfully");
        } else {
            console.log("Test user already exists");

        }
    } catch (error) {
        console.error("Error creating test user:", error);
    }
};

// Run the main function
// createTestUser().then(() => main()); 


module.exports = getAIResponse;