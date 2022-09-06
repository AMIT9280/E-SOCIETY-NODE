const suggestionModel = require("../model/suggestion-model")

//Add Suggestion

module.exports.AddSuggestion = function (req, res) {

    Suggestion = new suggestionModel({

        suggestionNo: req.body.suggestionNo,
        date: req.body.date,
        suggestions: req.body.suggestions,
        reason: req.body.reason,
        acknowledgement: req.body.acknowledgement
    })
    Suggestion.save(function (err, data) {

        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Suggestion Added",
                status: 200,
                data: data
            })
        }
    })
}

// Get All suggestions

module.exports.GetAllSuggestions = function (req, res) {

    suggestionModel.find().populate("User").populate("House").exec(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Suggestion Ret...",
                status: 200,
                data: data
            })
        }
    })
}

//Update Suggestions

module.exports.UpdateSuggestion = function (req, res) {

    let SuggestionsId = req.body.SuggestionsId
    let suggestionNo = req.body.suggestionNo
    let date = req.body.date
    let suggestions = req.body.suggestions
    let reason = req.body.reason
    let acknowledgement = req.body.acknowledgement


    suggestionModel.updateOne({ _id: SuggestionsId },
        {suggestionNo:suggestionNo,date:date,suggestions:suggestions,reason:reason,acknowledgement:acknowledgement},
        function (err,data) {
            if (err) {
                res.json({
                    msg: "SMW",
                    status: -1,
                    data: err
                })
            } else {
                res.json({
                    msg: "Suggestion Updated",
                    status: 200,
                    data: data
                })
            }
        })
}
//delete Suggestion

module.exports.DeleteSuggestion = function(req,res){

    let SuggestionsId = req.body.SuggestionsId

    suggestionModel.deleteOne({_id:SuggestionsId},
    function(err,data){
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Suggestion Deleted",
                status: 200,
                data: data
            })
        }
    })

}