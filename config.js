const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://amankumaryadavcdeee21:xU6lRILKEocROmaQ@cluster0.hqi6iyk.mongodb.net/");
// mongodb://localhost:27017
// Check database connected or not
// mongodb+srv://amankumaryadavcdeee21:xU6lRILKEocROmaQ@login-signup.00vfkvw.mongodb.net/
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;