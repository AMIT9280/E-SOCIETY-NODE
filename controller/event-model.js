const eventModel = require("../model/event-model")


//Add Event
module.exports.AddEvent = function (req, res) {


    let Event = new eventModel({
        houseId: req.body.houseId,
        userId: req.body.userId,
        eventDate: req.body.eventDate,
        eventEndDate: req.body.eventEndDate,
        eventDetails: req.body.eventDetails,
        rent: req.body.rent,
        isAvailable: req.body.isAvailable,
    })

    Event.save(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Event Added",
                Status: 200,
                data: data
            })
        }
    })
}

//Get All Event
module.exports.getAllEvent= function (req, res) {

    eventModel.find().populate("User").populate("House").exec(function (err, data) {

        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Event Ret...",
                status: 200,
                data: data
            })
        }
    })
}

//Event Update
module.exports.UpdateEvent = function (req, res) {
    let memberId = req.body.memberId
    let eventId = req.body.eventId
    let userId = req.body.userId
    let eventDate =  req.body.eventDate
    let eventEndDate = req.body.eventEndDate
    let eventDetails = req.body.eventDetails
    let rent = req.body.rent
    let isAvailable = req.body.isAvailable
   

    eventModel.updateOne({ _id: eventId }, {eveeventDatentId:eventDate,eventEndDate:eventEndDate,eventDetails:eventDetails,rent:rent,isAvailable:isAvailable}, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Event Updated",
                status: 200,
                data: data

            })
        }
    })
}

//Event Delete
module.exports.DeleteEvent = function (req, res) {

    let memberId = req.body.memberId
    eventModel.deleteOne({ _id: memberId }, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Event Deleted",
                status: 200,
                data: data
            })
        }
    })
}