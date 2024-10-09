const express = require("express");
const Score = require("../models/Score");
const router = express.Router();

router.post("/", async (req, res) => {
    const { userId, score } = req.body;
    const newScore = new Score({ userId, score });
    await newScore.save();
    res.status(201).send("Pontuação registrada com sucesso!");
});

router.get("/", async (req, res) => {
    const scores = await Score.find().populate("userId", "username");
    res.json(scores);
});

module.exports = router;
