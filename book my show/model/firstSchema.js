const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    movie: {
        type:String,
        required: true,
    },
    rate: {
        type:String,
        required: true,
    },
    date:{
        type:String,
        required:true,
    },
    lan:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("Book My Show",Schema);

module.exports = admin;