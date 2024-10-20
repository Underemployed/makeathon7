
const User = require('../models/userSchema');
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });




const getAIResponse = (userMessage) => {
    
    const result = model.generateContent(userMessage).then((result) => console.log(result.response.text()));
}

getAIResponse("hi");