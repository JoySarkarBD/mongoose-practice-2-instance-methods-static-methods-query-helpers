const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/test', {
            useNewUrlParser: true, useUnifiedTopology: true
        });  
        console.log("connected to mongodb");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection;