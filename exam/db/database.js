var mongoose = require("mongoose");

var V = new mongoose.Schema({
    name: String,
    age: Number,
    occupation: String
});

function findByIdAndUpdate(id){

    v.findOne({

        id:id
        
    }, function(err){

        console.log(err)
    })
}

module.exports = mongoose.model("data", V);