"use strict";

const fs = require('fs');

let express = require('express');
let app = express();


// for now this is to say that everyone can reach this webserver
// from everywhere
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// to open a specific file in js folder
app.get('/js/index.js', function(req,res) {
    res.writeHead(200, { 'Content-Type': 'application/js' });
    fs.readFile('js/index.js', function(err, data) {
      res.write(data);
      res.end();
    });
})

// to open an arbitray file which is used in the js file
app.get('/js/:filename', function(req,res) {
  let filename = req.params.filename;
    res.writeHead(200, { 'Content-Type': 'application/js' });
    fs.readFile(`js/${filename}` , function(err, data) {
      res.write(data);
      res.end();
    });
})

app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('public/index.html', function (err, data) {
        res.write(data);
        res.end();
    });
})

// to open an arbitray file which is used in the js file
app.get('^/images/:filename', function(req,res) {

    console.log(`${req.params.filename}`);
    let filename = req.params.filename;
      res.writeHead(200, { 'Content-Type': 'application/js' });
      fs.readFile(`public/images/${filename}.jpg` , function(err, data) {
        res.write(data);
        res.end();
      });
  })

app.get('/api/users', function (req, res) {

    let users = [];

    for (let i = 0; i < 3; i++) {
        let user = {
            username: 'Poedel ' + i,
            email: 'poedel@example.com'
        }
        users.push(user);
    }

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(users));
});


// and finally ... run it :-)
// get the server from the app which runs on port 8081
let server = app.listen(8081, function () {

    console.log("Example app listening at http://%s:%s", server.address().address, server.address().port)
});
