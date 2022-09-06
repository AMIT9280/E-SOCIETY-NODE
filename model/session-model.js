const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({

   
   
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
    },
    confirmPass:{
        type:String,
        required:true
    },role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }

});
module.exports = mongoose.model("User",UserSchema);
