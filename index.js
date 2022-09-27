const { urlencoded } = require("express");
const express = require("express");
const mongoose  = require("mongoose");
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const memberController = require("./controller/member-controller")
const eventController = require("./controller/event-model")
const societyController = require("./controller/society-controller")
const maintenanceController = require("./controller/maintenance-controller")
const staffController = require("./controller/staffTable-controller")
const complaintController = require("./controller/complaint-controller")
const suggestionController = require("./controller/suggestion-controller")
const deliveryController = require("./controller/delivery-controller")
const visitorController = require("./controller//visitor-controller")
const houseController = require("./controller/house-controller")
const app = express();
const cors = require("cors");
//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

//DataBase Connection
// mongoose.connect('mongodb+srv://amit:Amit@1324@cluster0.sxuwjh9.mongodb.net/?retryWrites=true&w=majority',function(err){
//         if(err){
//                 console.log("DB not connected....");
//                 console.log(err);
//         }else{
//             console.log("DB Connected....");
//         }
// })

mongoose.connect(
    'mongodb+srv://amit:Amit1324@cluster0.sxuwjh9.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS:30000,
      keepAlive:true,
    },
    (err)=>{
      if(err){
        console.log(err);
      } else{
        console.log("Db Connect");
      }  
    }

  );


//Api's

//1.Role Api
app.post("/role",roleController.AddRole)
app.get("/role",roleController.getAllRoles)
app.put("/role",roleController.UpdateRole)
app.delete("/role/:roleId",roleController.DeleteRole)

//2.User Api
app.post("/user",userController.AddUser)
app.get("/user",userController.getAllUsers)
app.put("/user/:uId",userController.UpdateUser)
app.delete("/user/:UserId",userController.DeleteUser)
app.get("/user/:uId",userController.getUserById)
app.post("/login",userController.login)
 
//add Developer
app.post("/signup",userController.AddDeveloper)
app.post("/login",userController.login)
 
 

//3.Member Api
app.post("/member",memberController.AddMember)
app.get("/member",memberController.getAllMember)
app.put("/member",memberController.UpdateMember)
app.delete("/member/:memberId",memberController.DeleteMember)

//4.Event Api
app.post("/event",eventController.AddEvent)
app.get("/event",eventController.getAllEvent)
app.put("/event",eventController.UpdateEvent)
app.delete("/event/:eventId",eventController.DeleteEvent)

//5.Society Api
app.post("/society",societyController.AddSociety)
app.get("/society",societyController.getAllSociety)
app.put("/society",societyController.UpdateSociety)
app.delete("/society/:societyId",societyController.DeleteSociety)

//6.Maintenance Api
app.post("/maintenance",maintenanceController.AddMaintenance)
app.get("/maintenance",maintenanceController.getAllMaintenance)
app.put("/maintenance",maintenanceController.UpdateMaintenance)
app.delete("/maintenance/:maintenanceId",maintenanceController.DeleteMaintenance)

//7.Staff Api
app.post("/staff",staffController.AddStaff)
app.get("/staff",staffController.GetAllStaff)
app.put("/staff",staffController.UpdateStaff)
app.delete("/staff/:staffId",staffController.DeleteStaff)

//8.Complaint Api
app.post("/complaint",complaintController.AddComplaint)
app.get("/complaint",complaintController.GetAllComplaint)
app.put("/complaint",complaintController.UpdateComplaint)
app.delete("/complaint/:complaintId",complaintController.DeleteComplaint)

//9.Suggestion Api
app.post("/suggestion",suggestionController.AddSuggestion)
app.get("/suggestion",suggestionController.GetAllSuggestions)
app.put("/suggestion",suggestionController.UpdateSuggestion)
app.delete("/suggestion/:suggestionId",suggestionController.DeleteSuggestion)

//10. Delivery Api
app.post("/delivery",deliveryController.AddDelivery)
app.get("/delivery",deliveryController.GetAllDelivery)
app.put("/delivery",deliveryController.updateDelivery)
app.delete("/delivery/:deliveryId",deliveryController.DeleteDelivery)

//11. visitor Api
app.post("/visitor",visitorController.AddVisitor)
app.get("/visitor",visitorController.GetAllVisitor)
app.put("/visitor",visitorController.UpdateVisitor)
app.delete("/visitor/:visitorId",visitorController.DeleteVisitor)

//12. House Api
app.post("/house",houseController.AddHouse)
app.get("/house",houseController.getAllHouse)
app.put("/house",houseController.UpdateHouse)
app.delete("/house/:houseId",houseController.DeleteHouse)


//server port
const PORT = process.env.PORT
app.listen(8080
  
  
  ,function(err){
    if(!err){
        console.log("Server Started 8080...");
    }else{
        console.log("Server Error SMW");  
    }
})


