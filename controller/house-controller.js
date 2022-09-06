const houseModel = require("../model/house-model")


//Add house
module.exports.AddHouse = function(req,res){

        console.log( req.body.houseDetails );
        let House = new houseModel({
            houseDetails: req.body.houseDetails 
        })

        House.save(function(err,data ){
            if(err){
                res.json({
                    msg:"SMW",
                    Status:-1,
                    data:err
                })
            }else{
                res.json({
                    msg:"House Added",
                    Status:200,
                    data:data
                })
            }
        })
}

//Get All House
module.exports.getAllHouse= function(req,res){

    houseModel.find().populate("User").exec(function(err,data){

                if(err){
                        res.json({
                            msg:"SMW",
                            status:-1,
                            data:err
                        })
                }else{
                        res.json({
                            msg:"house Ret...",
                            status:200,
                            data:data
                        })
                }
        })
}

//House Update
module.exports.UpdateHouse = function(req,res){

    let houseDetails = req.body.houseDetails
    let HouseId = req.body.HouseId

    houseModel.updateOne({_id:HouseId},{houseDetails:houseDetails},function(err,data){
        if(err){
            res.json({
                msg:"SMW",
                Status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"House Updated",
                status:200,
                data:data

            })
        }
    })
}

//House Delete
module.exports.DeleteHouse = function(req,res){

            let HouseId =req.body.HouseId
            roleModel.deleteOne({_id:HouseId},function(err,data){
                    if(err){
                        res.json({
                            msg:"SMW",
                            Status:-1,
                            data:err
                        })
                    }else{
                        res.json({
                            msg:"House Deleted",
                            status:200,
                            data:data
                        })
                    }
            })
}