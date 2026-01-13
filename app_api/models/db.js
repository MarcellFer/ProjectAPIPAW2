const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            // ambil drivers di monggodb.com
            "mongodb+srv://Marcell:qwaserdf@cluster0.mi2zpvo.mongodb.net/si5apaw2?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;