var express = require('express');
var router = express.Router();
var mysql=require("mysql");

var connection =mysql.createConnection({
    host:'localhost',
    // port:"3306",
    user:'root',
    password:'root',
    database:'tpshop2.0'
})

/* GET home page. */
router.get('/', function(req, res, next) {
	connection.query("select * from admin", function (error, result) {
//		res.send(result);
	console.log(result);
    res.render("index", {title: result,tit:'hello'});
	})
});

module.exports = router;
