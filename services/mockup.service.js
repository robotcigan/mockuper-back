const mongoose = require('mongoose');
const Mockup = require('../models/mockup.model.js');

// find all mockup
module.exports.findMockups = () => {
  return Mockup.find();
}

// find one mockup
module.exports.findMockupById = (id) => {
  return Mockup.findById(id);
}

// module.exports.findMockupByUrl = (url) => {
//   return Mockup.find({url: url})
// }

