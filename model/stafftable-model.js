const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const StaffTableSchema = new mongoose.Schema({
    staffMemberName:{
        type:String,
        required:true
    },    
    type:{
        type:String,
        required:true
    },
    entryTime:{
        type:TimeRanges,
       required:true
    },
    exitTime:{
        type:TimeRanges,
        required:true
    },
    contactNo:{
        type:Number
        ,required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    isAllowed:{
        type:Boolean,
        required:true
    },
    agencyName:{
        type:String,
        required:true
    },
    agencyContactNum:{
        type:Number,
        required:true
    }

});
module.exports = mongoose.model("Staff",StaffTableSchema);
