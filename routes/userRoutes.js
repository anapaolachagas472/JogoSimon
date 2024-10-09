const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).send("Usuário criado com sucesso!");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
        return res.status(400).send("Usuário ou senha incorretos.");
    }
    res.send("Login bem-sucedido!");
});

module.exports = router;
