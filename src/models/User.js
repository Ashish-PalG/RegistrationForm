const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:15
    },
    phone: {
        type:Number,
        required:true,
        unique:true,
        min:10
    },
    email: {
        type:String,
        required:true,
        unique:[true,"Email already registered"]
    },
    password: {
        type:String,
        required:true,
        min:3,
        max:10
    }
})

const User = new mongoose.model("User",UserSchema);

module.exports = User;