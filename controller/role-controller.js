const roleModel = require("../model/role-model")


//Add Role
module.exports.AddRole = function(req,res){

        console.log( req.body.RoleName );
        let Role = new roleModel({
            RoleName: req.body.RoleName 
        })

        Role.save(function(err,data ){
            if(err){
                res.json({
                    msg:"SMW",
                    Status:-1,
                    data:err
                })
            }else{
                res.json({
                    msg:"Role Added",
                    Status:200,
                    data:data
                })
            }
        })
}

//Get All Role
module.exports.getAllRoles = function(req,res){

        roleModel.find(function(err,data){

                if(err){
                        res.json({
                            msg:"SMW",
                            status:-1,
                            data:err
                        })
                }else{
                        res.json({
                            msg:"SMW",
                            status:200,
                            data:data
                        })
                }
        })
}

//Role Update
module.exports.UpdateRole = function(req,res){

    let RoleName = req.body.RoleName
    let RoleId = req.body.RoleId

    roleModel.updateOne({_id:RoleId},{RoleName:RoleName},function(err,data){
        if(err){
            res.json({
                msg:"SMW",
                Status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"Role Updated",
                status:200,
                data:data

            })
        }
    })
}

//Role Delete
module.exports.DeleteRole = function(req,res){

            let RoleId =req.body.RoleId
            roleModel.deleteOne({_id:RoleId},function(err,data){
                    if(err){
                        res.json({
                            msg:"SMW",
                            Status:-1,
                            data:err
                        })
                    }else{
                        res.json({
                            msg:"Role Deleted",
                            status:200,
                            data:data
                        })
                    }
            })
}