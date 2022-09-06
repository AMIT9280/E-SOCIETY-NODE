const deliveryModel = require("../model/delivery-model")

//Add Delivery

module.exports.AddDelivery = function (req, res) {

    Delivery = new deliveryModel({

        courierType: req.body.courierType,
        isAllowed: req.body.isAllowed,
        status: req.body.status,
    })

    Delivery.save(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Delivery Added.",
                status: 200,
                data: data
            })
        }
    })
}

//Get All Delivery

module.exports.GetAllDelivery = function (req, res) {

    deliveryModel.find().populate("User").populate("House").exec(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "delivery Ret...",
                status: 200,
                data: data
            })
        }
    })
}

//update Delivery

module.exports.updateDelivery = function (req, res) {

    let deliveryId = req.body.deliveryId
    let courierType = req.body.courierType
    let isAllowed = req.body.isAllowed
    let status = req.body.status

    deliveryModel.updateOne({ _id: deliveryId },
        {
            courierType:courierType,isAllowed:isAllowed,status:status
        },
        function (err,data) {
            if (err) {
                res.json({
                    msg: "SMW",
                    status: -1,
                    data: err
                })
            } else {
                res.json({
                    msg: "Delivery updated",
                    status: 200,
                    data: data
                })
            }
        })
}
//Delete Delivery

module.exports.DeleteDelivery = function(req,res){
   
       let deliveryId = req.body.deliveryId
        deliveryModel.deleteOne({_id:deliveryId},function(err,data){
            if (err) {
                res.json({
                    msg: "SMW",
                    status: -1,
                    data: err
                })
            } else {
                res.json({
                    msg: "Delivery Deleted",
                    status: 200,
                    data: data
                })
            }
        })
}