const express = require('express');
const aiChatRouter = express.Router();
const { getAIResponse } = require('../controllers/geminiController');
const authMiddleware = require('../middlewares/authMiddleware');

aiChatRouter.post('/chat', authMiddleware, async (req, res) => {
    try {
        const { message, userId } = req.body;
        const response = await getAIResponse(message, userId);
        res.json({ success: true, response });
    } catch (error) {
        console.error('Error in AI chat:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});



module.exports = aiChatRouter;
