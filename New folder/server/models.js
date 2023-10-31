const mongoose = require('mongoose')


// Define the Book schema and model
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    summary: String,
  });
  
  module.exports = mongoose.model('Book', bookSchema);
  