

var express=require('express');
var app =express();
var bodyParser=require('body-parser');
var methodOverride=require('method-override');


var db=require('./config/db');

var port=process.env.port||3000;

app.use(bodyParser.json());

app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(bodyParser.urlencoded({extended:true}));


//app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname+'/public'));

require('./app/routes')(app);

app.listen(port);

console.log('Server started on'+port);

exports=module.exports=app;