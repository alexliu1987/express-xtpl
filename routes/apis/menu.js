var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile("./data/menu.json", function(error, fileData) {
		res.json(JSON.parse(fileData));
	});
});

module.exports = router;