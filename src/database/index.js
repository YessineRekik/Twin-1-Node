const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose
  .connect('mongodb://localhost/twin4')
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));
