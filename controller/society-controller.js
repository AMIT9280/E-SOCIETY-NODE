const societyModel = require("../model/society-model")

//Add Event
module.exports.AddSociety= function (req, res) {


    let Society = new societyModel({
        societyName: req.body.societyName,
        address: req.body.address,
        city: req.body.city,
        pinCode: req.body.pinCode,
        noOfHouse: req.body.noOfHouse,
    })

    Society.save(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Society Added",
                Status: 200,
                data: data
            })
        }
    })
}

//Get All Society
module.exports.getAllSociety= function (req, res) {

    societyModel.find(function (err, data) {

        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Society Ret...",
                status: 200,
                data: data
            })
        }
    })
}

//Society Update
module.exports.UpdateSociety = function (req, res) {
    let societyId = req.body.societyId
    let societyName = req.body.societyName
    let address = req.body.address
    let city =  req.body.city
    let pinCode = req.body.pinCode
    let noOfHouse = req.body.noOfHouse
    societyModel.updateOne({ _id: societyId }, {societyName:societyName,address:address,city:city,pinCode:pinCode,noOfHouse:noOfHouse}, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Society Updated",
                status: 200,
                data: data

            })
        }
    })
}

//Event Society
module.exports.DeleteSociety = function (req, res) {

    let societyId = req.body.societyId
    societyModel.deleteOne({ _id: societyId }, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Society Deleted",
                status: 200,
                data: data
            })
        }
    })
}