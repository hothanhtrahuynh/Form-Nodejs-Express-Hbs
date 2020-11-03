var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post("/", function(req, res) {

    var number1 = req.body.firstnumber;
    var number2 = req.body.secondnumber;
    var calcRadios = req.body.calcRadios;

    number1 = Number.parseFloat(number1);
    number2 = Number.parseFloat(number2);
    var result = "";
    var add = "";
    var sub = "";
    var mul = "";
    var div = "";


    switch (calcRadios) {
        case "add":
            result = number1 + number2;
            add = "checked";
            break;
        case "sub":
            sub = "checked";
            result = number1 - number2;
            break;
        case "mul":
            result = number1 * number2;
            mul = "checked";
            break;
        case "div":
            result = number1 / number2;
            div = "checked";
            break;
    }

    res.render('index', { number1, number2, result, calcRadios, add, sub, mul, div });
});

module.exports = router;