const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const SocietySchema = new mongoose.Schema({
    societyName:{
        type:String,
        required:true
    },    
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
       required:true
    },
    pinCode:{
        type:Number,
        required:true
    },
    noOfHouse:{
        type:Number
        ,required:true
    } 
});
module.exports = mongoose.model("Society",SocietySchema);
