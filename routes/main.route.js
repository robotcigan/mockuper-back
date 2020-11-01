const router = require('express').Router();
const mockupService = require('../services/mockup.service');
const config = require('../configs/config');


// index page
router.get(`${config.apiUrl}/`, (req, res, next) => {
  res.send('index page')
});

// show all mockups
router.get(`${config.apiUrl}/mockups`, (req, res, next) => {
  mockupService.findMockups()
    .then(mockups => {
      res.send(mockups);
      // console.log(mockups)
    })
    .catch(err => next(err));
});

// show one mockup by id
router.get(`${config.apiUrl}/mockup/:id`, (req, res, next) => {
  mockupService.findMockupById(req.params.id)
    .then(mockup => {
      res.send({mockup: mockup});
    })
    .catch(err => next(err));
});

module.exports = router;