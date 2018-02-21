const express = require('express');
const app = express();
var path = require('path');


app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname + '/index.html'));
    
    });

//Return home.html page
app.get('/home', (req,res) => {
	console.log("GET request for home page");
    //res.sendFile(path.join(__dirname + '/about.html'));

});

//Return services.html page
app.get('/services', (req,res) => {
	console.log("GET request for services page");
    //res.sendFile(path.join(__dirname + '/about.html'));

});


const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log("Listening on port: " + PORT);