const mongoose = require('mongoose');

const mockupScheme = mongoose.Schema({
  fullName: String,
  shortName: String,
  tags: [],
  author: String,
  downloadLink: String,
  date: Date,
  images: []
})

let Mockup = mongoose.model('Mockup', mockupScheme);

module.exports = Mockup;