const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
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

const Volunteer = new mongoose.model("Volunteer",VolunteerSchema);

module.exports = Volunteer;