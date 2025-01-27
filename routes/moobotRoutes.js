const express = require('express');
const ageHandler = require('../commands/ageCommand');

const router = express.Router();

router.get('/moobot/age', ageHandler);

module.exports = router;
