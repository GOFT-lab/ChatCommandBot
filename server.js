require('dotenv').config(); // Підключення dotenv
const express = require('express');
const bodyParser = require('body-parser');
const moobotRoutes = require('./routes/moobotRoutes');

const app = express();

// Отримуємо змінні середовища з .env
const PORT = process.env.PORT || 3000;
const ROOT_LINK = process.env.ROOT_LINK || 'http://localhost';

// Middleware для обробки JSON
app.use(bodyParser.json());

// Підключаємо роут для Moobot
app.use('/moobot', moobotRoutes);

// Запускаємо сервер
app.listen(PORT, () => {
  console.log(`Сервер працює на ${ROOT_LINK}:${PORT}`);
});
