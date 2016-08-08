var express = require('express');
var menu = require('./apis/menu');
var router = express.Router();

router.use('/menu', menu);

module.exports = router;