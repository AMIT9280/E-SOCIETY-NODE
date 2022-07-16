const userModel = require("../model/user-model")


//Add User
module.exports.AddUser = function (req, res) {


    let User = new userModel({
        houseId: req.body.houseId,
        roleId: req.body.roleId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Dob: req.body.Dob,
        age: req.body.age,
        gender: req.body.gender,
        contact: req.body.contact,
        email: req.body.email,
        password: req.body.houseId
    })

    User.save(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "User Added",
                Status: 200,
                data: data
            })
        }
    })
}

//Get All User
module.exports.getAllUsers = function (req, res) {

    userModel.find(function (err, data) {

        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "User Ret...",
                status: 200,
                data: data
            })
        }
    })
}

//User Update
module.exports.UpdateUser = function (req, res) {
    let userId = req.body.userId
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let Dob = req.body.Dob
    let age = req.body.age
    let gender = req.body.gender
    let contact = req.body.contact
    let email = req.body.email

    userModel.updateOne({ _id: userId }, {firstName:firstName,lastName:lastName,Dob:Dob,age:age,gender:gender,contact:contact,email:email}, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "User Updated",
                status: 200,
                data: data

            })
        }
    })
}

//User Delete
module.exports.DeleteRole = function (req, res) {

    let UserId = req.body.UserId
    userModel.deleteOne({ _id: UserId }, function (err, data) {
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