const SingerModel = require('../models/Singer.model');
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  console.log(1234567);
  response.render('home', { title: 'Home Page' });
});
router.get('/add', (request, response) => {
  response.render('add', { title: 'Add new Singer' });
});
router.get('/update', (request, response) => {
  response.render('update', { title: 'Update singer' });
});
module.exports = router;