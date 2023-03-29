const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "monday";
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "thursday";
      break;
    case 5:
      day = "friday";
      break;
    case 6:
      day = "saturday";
      break;
    default :
      console.log("Error in currentday");
  }

  // console.log(today,currentDay);

  // if(today.getDay()==6 || today.getDay()==0){
  //     day="weekend";
  // }
  // else{
  //     //res.sendFile(__dirname+"/index.html");
  //     day="weekday";
  // }
  res.render("list", { kindofday: day });
});

app.listen(3000, function (req, res) {
  console.log("Server is running on 3000");
});
