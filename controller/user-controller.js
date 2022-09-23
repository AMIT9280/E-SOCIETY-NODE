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
        confirmPass: req.body.confirmPass,
        email: req.body.email,
        password: req.body.password
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
//Add Devloper
module.exports.AddDeveloper = function (req, res) {


    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let gender = req.body.gender;
    let contact = req.body.contact;
    let email = req.body.email;
    let Dob = req.body.Dob;
    let password = req.body.password;
    let confirmPass = req.body.confirmPass
    let role = "62ee1fd803b1a6b821f3eeb5";

    let user = new userModel({

        firstName: firstName,
        lastName: lastName,
        Dob: Dob,
        confirmPass, confirmPass,
        gender: gender,
        contact: contact,
        email: email,
        password: password,
        role: role
    })

    user.save(function (err, data) {
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
    let userId = req.params.uId
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let Dob = req.body.Dob
    let age = req.body.age
    let gender = req.body.gender
    let contact = req.body.contact
    let email = req.body.email

    userModel.findByIdAndUpdate({ _id: userId }, { firstName: firstName, lastName: lastName, Dob: Dob, age: age, gender: gender, contact: contact, email: email }, function (err, data) {
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
//get by id
module.exports.getUserById = function (req, res) {

    let UserId = req.params.uId
    userModel.findById({ _id: UserId }, function (err, data) {

        if (err) {

            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({ msg: "User Retrieve", status: 200, data: data })
        }
    })
}


//User Delete
module.exports.DeleteUser = function (req, res) {

    let UserId = req.params.UserId

    userModel.findByIdAndDelete({ _id: UserId }, function (err, data) {
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

//login
// module.exports.login = function (req, res) {

//     let param_email = req.params.email
//     let param_password = req.params.password

//     console.log(param_email);
//     console.log(param_password);
//     let isCorrect = false;

//     userModel.findOne({ email: param_email }, function (err, data) {
//         if (this.email == param_email) {

//             isCorrect = true
//         }
//         if (isCorrect == false) {

//             res.json({
//                 msg: "invelid Credentials...",
//                 status: -1,
//                 data: err
//             })
//         } else {

//             res.json({ msg: "login...", status: 200, data: data })
//         }
//     })
// }
//Login
module.exports.login = function (req, res) {

    let param_email = req.body.email
    let param_password = req.body.password
    console.log(param_email);
    console.log(param_password);
    let isCorrect = false;

    userModel.findOne({ email: param_email}).populate("Role").exec(function (err, data) {
        if (this.email == param_email) {

                        isCorrect = true
                    }
                    if (isCorrect == false) {
            
                        res.json({
                            msg: "invelid Credentials...",
                            status: -1,
                            data: err
                        })
                    } else {
            
                        res.json({ msg: "login...", status: 200, data: data })
                    }
                })
}


