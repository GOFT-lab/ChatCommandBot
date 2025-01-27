const express = require('express');
const ageHandler = require('../commands/ageCommand');

const router = express.Router();

router.post('/moobot/age', ageHandler);

module.exports = router;
