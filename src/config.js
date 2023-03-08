const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  endPoint: process.env.MONGO_URI,
};