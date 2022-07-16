const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({

    houseId:{
        type:String,
        ref:"Role"
    },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
        ,required:true
    },
    Dob:{
        type:Date,
        required:true     
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("User",UserSchema);
