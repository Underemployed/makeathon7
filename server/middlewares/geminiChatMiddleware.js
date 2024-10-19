
const User = require('../models/userSchema');

const geminiChatMiddleware = async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        req.chatSummary = user.chatSummary;

        // Store the original json method
        const originalJson = res.json;

        // Override the json method
        res.json = function(data) {
            // Update the chat summary
            const newSummary = updateChatSummary(req.chatSummary, req.body.message, data.response);
            User.findByIdAndUpdate(userId, { chatSummary: newSummary }).exec();

            // Call the original json method
            originalJson.call(this, data);
        };

        next();
    } catch (error) {
        next(error);
    }
};

function updateChatSummary(currentSummary, userMessage, geminiResponse) {
    // Implement your summary update logic here
    // This is a basic example; you might want to use more sophisticated summarization techniques
    return `${currentSummary}\nUser: ${userMessage}\nGemini: ${geminiResponse}`.trim();
}

module.exports = geminiChatMiddleware;
