const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
     type: String, 
     required: true
    },
    password: {
        type: String,
         required:true
    },
    pic: {
        type: String,
         required:true,
         default:"https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
    }
},{timestamps:true});

const User = mongoose.model("User", userSchema);

module.exports = User;