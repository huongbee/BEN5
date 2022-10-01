const { encode } = require('../lib/utils');

module.exports = {
  validateForm: (req, res, next) => {
    const body = req.body;
    let path = req.path;
    if (body.txtId) path = path + '/' + body.txtId; // /update/:id

    const { txtName, txtAvatar, txtLink } = body;
    if (!txtName.trim()) {
      return res.redirect(`${path}?e=${encode('Please enter a name')}`);
    }
    if (!txtAvatar.trim()) {
      return res.redirect(`${path}?e=${encode('Please enter a avt')}`);
    }
    if (!txtLink.trim()) {
      return res.redirect(`${path}?e=${encode('Please enter a link')}`);
    }
    next();
  },
  authenticate: (req, res, next) => {
  }
};