const { GoogleGenerativeAI } = require("@google/generative-ai");
 
require("dotenv").config();

const gemini_api_key = process.env.GEMINI_API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-pro",
    geminiConfig,
});

const generate = async (text) => {
    try {
        const prompt = "Tell me about google.";
        const result = await geminiModel.generateContent(prompt);
        const response = result.response;
        text = (response.text());
    } catch (error) {
        text = ("response error", error);
    }
    return text;
};

generate();