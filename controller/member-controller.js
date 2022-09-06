const memberModel = require("../model/member-model")


//Add Member
module.exports.AddMember = function (req, res) {


    let Member = new memberModel({
        houseId: req.body.houseId,
        memberName: req.body.memberName,
        Dob: req.body.Dob,
        age: req.body.age,
        gender: req.body.gender,
        contact: req.body.contact,
    })

    Member.save(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Member Added",
                Status: 200,
                data: data
            })
        }
    })
}

//Get All Member
module.exports.getAllMember= function (req, res) {

    memberModel.find().populate("House").exec(function (err, data) {

        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "members Ret...",
                status: 200,
                data: data
            })
        }
    })
}

//member Update
module.exports.UpdateMember = function (req, res) {
    let memberId = req.body.memberId
    let memberName =  req.body.memberName
    let Dob = req.body.Dob
    let age = req.body.age
    let gender = req.body.gender
    let contact = req.body.contact
    let email = req.body.email

    memberModel.updateOne({ _id: memberId }, {memberName:memberName,Dob:Dob,age:age,gender:gender,contact:contact,email:email}, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Member Updated",
                status: 200,
                data: data

            })
        }
    })
}

//Member Delete
module.exports.DeleteMember = function (req, res) {

    let memberId = req.body.memberId
    memberModel.deleteOne({ _id: memberId }, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "User Deleted",
                status: 200,
                data: data
            })
        }
    })
}