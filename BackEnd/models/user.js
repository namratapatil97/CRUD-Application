const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");

//create schema(format) for db;

const userSchema = new mongoose.Schema({
    firstName : String ,
    lastName : String ,
    mobNumber : Number ,
    email : String,
    password : String
} , {
    timestamps:true
});

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
        console.log(this.password);
    }
    next();
})


module.exports = mongoose.model("users",userSchema);