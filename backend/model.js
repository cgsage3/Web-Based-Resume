const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: String,
    author: String,
    copies: Number
})

const book = mongoose.model('Form', booksSchema)
module.exports = book