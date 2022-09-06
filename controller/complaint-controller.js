const complaintModel = require("../model/complaint-model")

// Add Complaint
module.exports.AddComplaint = function (req, res) {

    Complaint = new complaintModel({

        complainNo: req.body.complainNo,
        userId: req.body.userId,
        houseId: req.body.houseId,
        date: req.body.date,
        complaint: req.body.complaint,
        isResolved: req.body.isResolved
    })
    Complaint.save(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "complaint Added",
                status: 200,
                data: data
            })
        }
    })
}

//GetAll Complaint

module.exports.GetAllComplaint = function (req, res) {

    complaintModel.find().populate("User").populate("House").exec(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Complain Ret....",
                status: 200,
                data: data
            })
        }
    })
}

//Update complaint

module.exports.UpdateComplaint = function (req, res) {

    let complaintId = req.body.complaintId
    let complainNo = req.body.complainNo
    let date = req.body.date
    let complaint = req.body.complaint
    let isResolved = req.body.isResolved

    complaintModel.updateOne({ _id: complaintId },
        { complainNo: complainNo, date: date, complaint: complaint, isResolved: isResolved },

        function (err,data) {
            if (err) {
                res.json({
                    msg: "SMW",
                    status: -1,
                    data: err
                })
            } else {
                res.json({
                    msg: "Complain Updated",
                    status: 200,
                    data: data
                })
            }

        })
}

// Delete Complaint

module.exports.DeleteComplaint = function(req,res){

    let complaintId = req.body.complaintId

    complaintModel.deleteOne({_id:complaintId},function(err,data){

        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Complain Deleted",
                status: 200,
                data: data
            })
        }
    })
}