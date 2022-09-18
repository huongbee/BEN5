const express = require('express');
const router = express.Router();

router.get('/*?', (request, response) => {
  response.render('404');
});
module.exports = router;