const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post('/', function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

res.send("The result is " + result);
})

app.listen(3000, function(){
    console.log("server started on port 3000");
})

// new server //

app.get("/bmi", function (req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
    })
    
    app.post('/bmi', function(req, res){
        var num3 = Number(req.body.num3);
        var num4 = Number(req.body.num4);
        var result = Math.round(num3 / Math.pow(num4, 2));

    
        res.send("Your BMI is " + result);
    });