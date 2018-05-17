/*jshint esversion: 6 */
var con = require('../../Utils/db');
var bcrypt = require("bcryptjs");
var hat = require("hat");

const saltRounds = 10; // How many times to slat the password
var rack = hat.rack(64,16);

exports.registerPassenger = (req, res) => {
  if(req.body.fname == undefined || req.body.lname == undefined
    || req.body.email == undefined || req.body.password == undefined
    || req.body.preferred_card_number == undefined || req.body.preferred_billing_address == undefined ){
      res.json({error: "Missing required field in request"});
    }else{
      let api_key = rack();
      bcrypt.hash(req.body.password, saltRounds, function(err, passwordHash){
        if(err)res.json({error: err, message: "error hashing password"});
        var registerPassengerSql = 'insert into passengers (fname,lname,email,password,preferred_card_number,preferred_billing_address, api_key) values '
        + '("' + req.body.fname + '","' + req.body.lname + '","' + req.body.email + '","' + passwordHash + '","' + req.body.preferred_card_number + '","' + req.body.preferred_billing_address + '","' + api_key + '");';
        con.query(registerPassengerSql,function(error,results,fields){
          if(error) res.status(500).json({error: error.code , message : "Database error"});
          res.json({message: "Successfuly registered user" , api_key});
        })

      })
    }

  };
