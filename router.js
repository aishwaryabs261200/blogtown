const express = require("express");
const { functions } = require("underscore");
const db_model  = require('./db_model') ;
const fs = require('fs');
const path = require('path') ;
var router = express.Router();

var data = require('./data') ;
const { homedir } = require("os");


const json = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

router.get("/", function (req, res) {
   
  res.render("home", { posts: json });
});

router.get("/cricket", function (req, res){

  var date = Date.now() ; 
  res.render("cricket" , {date : date}) ;
  
});
 //ata visit kr
 
// ata  mal current date phije
router.get("/login", function (req, res) {
  res.render("login", { isLogin: true });
});

router.post("/login", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var isExists = true;
  var User = {};


  if (isExists) {
    User.username = "Rushikesh";
    User.password = "NoPassword";
    data.user = User;
    res.redirect("/");
  } else {
  }
});

router.get("/upload", function (req, res) {
  res.render("upload");
});

router.post("/upload", function (req, res) {
  
});


router.get("/all" , function(req , res){

  
  db_model.find({dummyName : "hello"} , function(err , data){

    if(err)
      res.send("something error" + err ) ;
    else 
      res.render("temp" , {posts: data} ) ;


  }
  ) ;
 
})
module.exports = router;

