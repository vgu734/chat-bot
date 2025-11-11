import express from "express";
import { getFeedback } from "../services/languageToolService.js";

const router = express.Router();

router.post("/feedback", async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "No message provided." });

    try {
        const feedback = await getFeedback(message);
        return res.status(200).json(feedback);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: `Server error: ${error}` });
    }
});

export default router;