const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const MemberSchema = new mongoose.Schema({

    houseId:{
        type:String,
        ref:"Role"
    },
    memberName:{
        type:String,
        required:true
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
    }
});
module.exports = mongoose.model("Member",MemberSchema);
