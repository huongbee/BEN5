const SingerModel = require('../models/Singer.model');
const express = require('express');
const router = express.Router();
const Singer = new SingerModel();

router.get('/', async (request, response) => {
  const singers = await Singer.getAll();
  singers.forEach((singer) => {
    console.log(singer.name);
  })
  response.render('home', { title: 'Home Page', singers });
});
router.get('/add', (request, response) => {
  response.render('add', { title: 'Add new Singer' });
});
router.get('/update', (request, response) => {
  response.render('update', { title: 'Update singer' });
});
module.exports = router;