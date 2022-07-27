const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
}, { timestamps: true });

userSchema.methods = {
    getAll: function (n) {
       return model("User").find({}).limit(n)
    }
}

const User = model("User", userSchema);

module.exports = User;