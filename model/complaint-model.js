const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const ComplaintSchema = new mongoose.Schema({
    complainNo:{
        type:Number,
        required:true
    },    
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    houseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"House"
    },
    date:{
        type:Date,
        required:true
    },
    complaint:{
        type:String,
        required:true
    },
    isResolved:{
        type:Boolean,
        required:true
    } 
});
module.exports = mongoose.model("Complaint",ComplaintSchema);
