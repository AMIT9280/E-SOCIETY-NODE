const staffModel = require("../model/stafftable-model")


//Add Staff
module.exports.AddStaff = function (req, res) {

    let Staff = new staffModel({

        staffMemberName: req.body.staffMemberName,
        type: req.body.type,
        entryTime: req.body.entryTime,
        exitTime: req.body.exitTime,
        contactNo: req.body.contactNo,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        isAllowed: req.body.isAllowed,
        agencyName: req.body.agencyName,
        agencyContactNum: req.body.agencyContactNum

    })
    Staff.save(function (err, data) {

        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {

            res.json({
                msg: "Staff Added",
                status: 200,
                data: data
            })
        }
    })
}

//Get All Staff

module.exports.GetAllStaff = function (req, res) {
    staffModel.find(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Staff Ret...",
                status: 200,
                data: data
            })
        }

    })
}

//Update Staff

module.exports.UpdateStaff = function (req, res) {

    let staffId = req.body.staffId
    let staffMemberName = req.body.staffMemberName
    let type = req.body.type
    let entryTime = req.body.entryTime
    let exitTime = req.body.exitTime
    let contactNo = req.body.contactNo
    let address = req.body.address
    let email = req.body.email
    let password = req.body.password
    let isAllowed = req.body.isAllowed
    let agencyName = req.body.agencyName
    let agencyContactNum = req.body.agencyContactNum


    staffModel.updateOne({ _id: staffId },
        {
            staffMemberName: staffMemberName, type: type, entryTime: entryTime, exitTime: exitTime,
            contactNo: contactNo, address: address, email: email, password: password, isAllowed: isAllowed,
            agencyName: agencyName, agencyContactNum: agencyContactNum
        },
        function (err, data) {
            if (err) {
                res.json({
                    msg: "SMW",
                    status: -1,
                    data: err
                })
            } else {
                res.json({
                    msg: "Staff Updated",
                    status: 200,
                    data: data
                })
            }
        })
}


//delete Staff

module.exports.DeleteStaff = function(req,res){

    let staffId = req.body.staffId

    staffModel.deleteOne({_id:staffId},function(err,data){
        if(err){
            res.json({
                msg:"SMW",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"Staff Deleted",
                status:200,
                data:data
            })
        }
    })
}