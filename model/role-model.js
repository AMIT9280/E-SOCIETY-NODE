const mongoose = require("mongoose")

const Schema =  mongoose.Schema;
const RoleSchema = new mongoose.Schema({
            
            RoleName:{
                type:String,
                require
           
            }       
});
module.exports = mongoose.model("Role",RoleSchema);