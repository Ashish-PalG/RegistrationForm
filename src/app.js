const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");

require("./db/conn");
const User = require("./models/User");
const Volunteer = require("./models/Volunteer");

app.set("view engine","hbs");

const template_path = path.join(__dirname,"../templates/views");
app.set("views",template_path);

const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/registrationForm",(req,res) => {
    res.render("registrationForm");
});

app.post("/register",async(req,res) => {
    try {
        if(req.body.user1 == 'user'){
            const newUser = new User({
                name:req.body.name,
                phone:req.body.phone,
                email:req.body.email,
                password:req.body.password
            })
            const StoreUser = await newUser.save();
            console.log(newUser);
            res.render("index");
        }else if (req.body.user1 == 'volunteer') {
            const newVolunteer = new Volunteer({
                name:req.body.name,
                phone:req.body.phone,
                email:req.body.email,
                password:req.body.password
            })
            const StoreVolun = await newVolunteer.save();
            console.log(newVolunteer);
            res.render("index");
        } else {
            res.status(400).send("Bad request");
        }
    } catch (e) {
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});