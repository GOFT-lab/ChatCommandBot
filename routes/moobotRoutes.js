const express = require('express');
const ageHandler = require('../commands/ageCommand');

const router = express.Router();

router.get('/age', ageHandler);

router.get('/', (req, res) => {
  res.json({ message: 'Сервер запущено!' });
});

module.exports = router;
