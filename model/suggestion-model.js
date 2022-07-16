const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const SuggestionSchema = new mongoose.Schema({
    suggestionNo:{
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
    suggesitons:{
        type:String,
        required:true
    },
    reason:{
        type:Boolean,
        required:true
    }, 
    acknowledgement:{
        type:Boolean,
        required:true
    } 
});
module.exports = mongoose.model("Suggestion",SuggestionSchema);
