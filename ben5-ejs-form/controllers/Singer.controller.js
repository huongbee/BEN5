const SingerModel = require('../models/Singer.model');
const express = require('express');
const router = express.Router();
const Singer = new SingerModel();
const { encode, decode } = require('../lib/utils');

router.get('/', async (request, response) => {
  const singers = await Singer.getAll();
  let errorMsg = '';
  if (request.query.e) { // handle error message
    try {
      errorMsg = decode(request.query.e);
    } catch (error) {
      errorMsg = 'System error!';
    }
  }
  response.render('home', { title: 'Home Page', singers, errorMsg });
});
router.get('/add', (request, response) => {
  response.render('add', { title: 'Add new Singer' });
});
router.post('/add', async (request, response) => {
  try {
    const { txtName = '', txtAvatar = '', txtLink = '' } = request.body;
    const data = await Singer.insert(txtName, txtAvatar, txtLink);
    if (data && data._id) {
      return response.redirect('/');
    }
    const errorMsg = 'Error! Can not save!';
    return response.redirect(`/?e=${encode(errorMsg)}`);
  } catch (error) {
    const errorMsg = error.message;
    return response.redirect(`/?e=${encode(errorMsg)}`);
  }
});

router.get('/update/:id', async (request, response) => {
  const singer = await Singer.findOne(request.params.id);
  if (!singer || !singer._id) {
    const errorMsg = 'Can not find singer!';
    return response.redirect(`/?e=${encode(errorMsg)}`);
  }
  response.render('update', { title: 'Update singer', singer });
});

router.post('/update', async (request, response) => {
  const { txtId, txtName, txtAvatar, txtLink } = request.body;
  const updated = await Singer.updateOne(txtId, txtName, txtAvatar, txtLink);
  if (!updated || updated.nModified != 1) {
    const errorMsg = 'Fail to update!';
    return response.redirect(`/?e=${encode(errorMsg)}`);
  }
  return response.redirect('/');
});
module.exports = router;