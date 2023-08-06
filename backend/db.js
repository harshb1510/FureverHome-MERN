const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://akshatgtc:UYB3mZKh4gFYr4ez@cluster0.njkvtb5.mongodb.net/FureverHome?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;
