export{}
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    // username: {type: String},
    title: {type: String, minlength: 3, trim: true},
    content: {type: String},
    // date: {type: Date}
},

//timestamps offer an autogenerated timestamp (createAt)
{timestamps: true,})

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;