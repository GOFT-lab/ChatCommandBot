const express = require('express');
const ageHandler = require('../commands/ageCommand');
const ball8Handler = require('../commands/ball8Command');
const selfBanHandler = require('../commands/selfBanCommand');

const router = express.Router();

router.get('/age', ageHandler);
router.get('/ball8', ball8Handler);
router.get('/ban', selfBanHandler);

router.get('/', (req, res) => {
  res.json({ message: 'Сервер запущено!' });
});

module.exports = router;
