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
    houseDetails:{
        type:String,
        required:true
    }
     
});
module.exports = mongoose.model("House",VisitorSchema);
