const mongoose = require("mongoose");

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        await mongoose.connect(process.env.DB, connectionParams); // Corrected the connection call
        console.log("Connected successfully ");
    } catch (error) {
        console.error("Could not connect to database:", error.message);
    }
};
