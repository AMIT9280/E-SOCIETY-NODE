const { urlencoded } = require("express");
const express = require("express");
const mongoose  = require("mongoose");
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const app = express();
 
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//DataBase Connection
mongoose.connect('mongodb://localhost:27017/E-SOCIETY',function(err){
        if(err){
                console.log("DB not connected....");
        }else{
            console.log("DB Connected....");
        }
})

//Api's

//Role Api
app.post("/role",roleController.AddRole)
app.get("/role",roleController.getAllRoles)
app.put("/role",roleController.UpdateRole)
app.delete("/role",roleController.DeleteRole)

//User Api
app.post("/user",userController.AddUser)
app.get("/user",userController.getAllUsers)
app.put("/user",userController.UpdateUser)
app.delete("/user",userController.DeleteRole)
 

//server port
app.listen(3000,function(err){
    if(!err){
        console.log("Server Started 3000...");
    }else{
        console.log("Server Error SMW");
        
    }
})


