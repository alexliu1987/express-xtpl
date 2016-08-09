var express = require('express');
var menu = require('./apis/menu');
var router = express.Router();

//设置跨域访问
router.all('*', function(req, res, next) {
	console.log(1)
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
router.use('/menu', menu);

module.exports = router;