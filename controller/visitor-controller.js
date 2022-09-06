const visitorModel = require("../model/visitor-model")


//Add Visitor

module.exports.AddVisitor = function (req, res) {

    visitor = new visitorModel({
        VisitorName: req.body.VisitorName,
        arrivingTime: req.body.arrivingTime,
        isAllowed: req.body.isAllowed,
    })
    visitor.save(function (err, data) {

        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Visitor Added",
                status: 200,
                data: data

            })
        }
    })
}

//Get All Visitor

module.exports.GetAllVisitor = function (req, res) {

    visitorModel.find().populate("User").populate("House").exec(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Visitor Ret...",
                status: 200,
                data: data

            })
        }
    })
}

//Visitor update

module.exports.UpdateVisitor = function (req, res) {
    let visitorId = req.body.visitorId
    let VisitorName = req.body.VisitorName
    let arrivingTime = req.body.arrivingTime
    let isAllowed = req.body.isAllowed

    visitorModel.updateOne({ _id: visitorId },
        {
            VisitorName:VisitorName,
            arrivingTime:arrivingTime,
            isAllowed:isAllowed,

        },

        function (err,data) {

            if (err) {
                res.json({
                    msg: "SMW",
                    Status: -1,
                    data: err
                })
            } else {
                res.json({
                    msg: "Visitor updated",
                    status: 200,
                    data: data
    
                })
            }

        })
}

//Delete visitor

module.exports.DeleteVisitor = function(req,res){
    let visitorId = req.body.visitorId

    visitorModel.deleteOne({_id:visitorId},function(err,data){
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Visitor Deleted",
                status: 200,
                data: data

            })
        }

    })


}