const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const VisitorSchema = new mongoose.Schema({
       
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    houseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"House"
    },
    VisitorName:{
        type:String,
        required:true
    },
    arrivingTime:{
        type:TimeRanges,
        required:true
    },
    isAllowed:{
        type:Boolean,
        required:true
    } 
});
module.exports = mongoose.model("Visitor",VisitorSchema);
