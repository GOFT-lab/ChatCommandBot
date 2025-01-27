const express = require('express');
const ageHandler = require('../commands/ageCommand');
const ball8Handler = require('../commands/ball8Command');

const router = express.Router();

router.get('/age', ageHandler);
router.get('/ball8', ball8Handler);

router.get('/', (req, res) => {
  res.json({ message: 'Сервер запущено!' });
});

module.exports = router;
