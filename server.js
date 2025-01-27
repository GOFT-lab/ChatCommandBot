require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const moobotRoutes = require('./routes/moobotRoutes');

const app = express();

const PORT = process.env.PORT || 3000;
const ROOT_LINK = process.env.ROOT_LINK || 'http://localhost';

app.use(bodyParser.json());

app.use('/moobot', moobotRoutes);

app.listen(PORT, () => {
  console.log(`Сервер працює на ${ROOT_LINK}:${PORT}`);
});
