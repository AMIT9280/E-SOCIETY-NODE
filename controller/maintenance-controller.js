const maintenanceModel = require("../model/maintenance-model")

//Add Maintenance
module.exports.AddMaintenance= function (req, res) {


    let Maintenance = new maintenanceModel({
        houseId:req.body.houseId,
        creationDate: req.body.creationDate,
        month: req.body.month,
        maintenanceAmt: req.body.maintenanceAmt,
        maintenancePaid: req.body.maintenancePaid,
        paymentDate: req.body.paymentDate,
        lastDate: req.body.lastDate,
        fine:req.body.fine
    })

    Maintenance.save(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Maintenance Added",
                Status: 200,
                data: data
            })
        }
    })
}

//Get All Maintenance
module.exports.getAllMaintenance = function (req, res) {

    maintenanceModel.find().populate("House").exec(function (err, data) {

        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Maintenance Ret...",
                status: 200,
                data: data
            })
        }
    })
}

//Maintenance Update
module.exports.UpdateMaintenance = function (req, res) {
    let maintenanceId = req.body.maintenanceId
    let creationDate = req.body.creationDate
    let month = req.body.month
    let maintenanceAmt =  req.body.maintenanceAmt
    let maintenancePaid = req.body.maintenancePaid
    let paymentDate = req.body.paymentDate
    let lastDate = req.body.lastDate
    let fine = req.body.fine
    maintenanceModel.updateOne({ _id: maintenanceId },
    {creationDate:creationDate,month:month,maintenanceAmt:maintenanceAmt,maintenancePaid:maintenancePaid,
        paymentDate:paymentDate,lastDate:lastDate,fine:fine}, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Maintenance Updated",
                status: 200,
                data: data

            })
        }
    })
}

//delete Maintenance
module.exports.DeleteMaintenance = function (req, res) {

    let maintenanceId = req.body.maintenanceId
    maintenanceModel.deleteOne({ _id: maintenanceId }, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Maintenance Deleted",
                status: 200,
                data: data
            })
        }
    })
}