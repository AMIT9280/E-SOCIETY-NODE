const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const EventSchema = new mongoose.Schema({


    houseId:{
        type:String,
        ref:"Role"
    },
    userId:{
        type:String,
        ref:"Role"
    },
    eventDate:{
        type:Date,
       required:true
    },
    eventEndDate:{
        type:Date,
        required:true
    },
    eventDetails:{
        type:String
        ,required:true
    },
    rent:{
        type:Number,
        required:true     
    },
    isAvailable:{
        type:Boolean,
        required:true
    } 
});
module.exports = mongoose.model("Event",EventSchema);
