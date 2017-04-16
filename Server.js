var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/src/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

/*
router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});
*/

app.use("/",router);
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/ccerscripts', express.static(__dirname + '/src/'));

/*
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});
*/

app.listen(3000,function(){
  console.log("Live at Port 3000");
});