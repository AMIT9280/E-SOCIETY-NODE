const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const MaintenanceSchema = new mongoose.Schema({
    houseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    },    
    creationDate:{
        type:Date,
        required:true
    },
    month:{
        type:String,
       required:true
    },
    maintenanceAmt:{
        type:Number,
        required:true
    },
    maintenancePaid:{
        type:Boolean
        ,required:true
    },
    paymentDate:{
        type:Date,
        required:true
    },
    lastDate:{
        type:Date,
        required:true
    },
    fine:{
        type:Number,
        required:true
    },
});
module.exports = mongoose.model("Maintenance",MaintenanceSchema);
