const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const DeliverySchema = new mongoose.Schema({
       
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    houseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"House"
    },
    courierType:{
        type:String,
        required:true
    },
    isAllowed:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    } 
});
module.exports = mongoose.model("Delivery",DeliverySchema);
