
const User = require('../models/userSchema');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const geminiChatMiddleware = async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        req.chatSummary = user.chatSummary;

        const originalJson = res.json;

        res.json = function(data) {
            const newSummary = updateChatSummary(req.chatSummary, req.body.message, data.response);

            User.findByIdAndUpdate(userId, { chatSummary: newSummary }).exec();

            originalJson.call(this, data);
        };

        next();
    } catch (error) {
        next(error);
    }
};

function updateChatSummary(currentSummary, userMessage, geminiResponse) {

    return `${currentSummary}\nUser: ${userMessage}\nGemini: ${geminiResponse}`.trim();
}



const prompt = "Does this look store-bought or homemade?";
const image = {
    inlineData: {
        data: Buffer.from(fs.readFileSync("cookie.png")).toString("base64"),
        mimeType: "image/png",
    },
};

const result = await model.generateContent([prompt, image]);
console.log(result.response.text());