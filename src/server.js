const { port } = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const Mongoose = require('./db/connection');
Mongoose.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', require('./routes/rot.routes'))

app.listen(port, () => console.log(`Rotation app listening on port ${port}!`))

module.exports = {
  app
}