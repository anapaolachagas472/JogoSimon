const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const dbConfig = require("./config/db");

const app = express();
app.use(express.json());

dbConfig();

app.use("/api/users", userRoutes);
app.use("/api/scores", scoreRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
