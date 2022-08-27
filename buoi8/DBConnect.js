const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ben5_relation',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err.message))