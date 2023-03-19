const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const excel = require('read-excel-file/node');
app.use(cors());

app.get('/getWelcomePageIconsInfo', function (req, res) {
  const directoryPath = process.cwd();

  excel(directoryPath + "/welcome-page-icons.xlsx").then((rows) => {
    res.send(rows);
  }).catch((error) => {
    res.send("File does not exist!");
  });
});

app.get('/getWelcomeParagraph', function (req, res) {
  const directoryPath = process.cwd();

  excel(directoryPath + "/welcome-paragraph.xlsx").then((rows) => {
    res.send(rows);
  }).catch((error) => {
    res.send("File does not exist!");
  });
});

app.get('/getInformationAfterWelcome', function (req, res) {
  const directoryPath = process.cwd();

  excel(directoryPath + "/information-after-welcome.xlsx").then((rows) => {
    res.send(rows);
  }).catch((error) => {
    res.send("File does not exist!");
  });
});

app.get('/getMembers', function (req, res) {
  const directoryPath = process.cwd();

  excel(directoryPath + "/members-information.xlsx").then((rows) => {
    res.send(rows);
  }).catch((error) => {
    res.send("File does not exist!");
  });
});

app.get('/getServices', function (req, res) {
  const directoryPath = process.cwd();

  excel(directoryPath + "/services.xlsx").then((rows) => {
    res.send(rows);
  }).catch((error) => {
    res.send("File does not exist!");
  });
});

app.get('/getTestimonials', function (req, res) {
  const directoryPath = process.cwd();

  excel(directoryPath + "/testimonials.xlsx").then((rows) => {
    res.send(rows);
  }).catch((error) => {
    res.send("File does not exist!");
  });
});

/*process.env.PORT is for render.com. Environment Variable PORT is created*/
const port = process.env.PORT;

app.listen(port, function (){
  console.log('Server is running on ' + port);
});