const mongoose = require("mongoose");

const dbConfig = () => {
    mongoose.connect("mongodb://localhost:27017/simon-game", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = dbConfig;
