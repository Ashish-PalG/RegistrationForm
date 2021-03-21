const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ngo-Volunteer",{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connected to database");
}).catch((e) => {
    console.log("No Connection");
})