const express = require('express');
const router = express.Router();

router.get('/login', (request, response) => {
  response.json({ title: 'login Page' });
});
router.get('/sign-up', (request, response) => {
  response.json({ title: 'Sign Up' });
});
module.exports = router;