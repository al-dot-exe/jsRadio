// Make sure to set up the server and install the required modules using npm
require('dotenv').config();
const http = require('http');
const fs = require('fs')
const url = require('url');
const fetch = require('cross-fetch');
const querystring = require('querystring');
const figlet = require('figlet');
const PORT = process.env.port || 8000;
const apiKey = process.env.APIKEY;

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  // const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  // stylesheets
  else if (page == '/css/normalise.css') {
    fs.readFile('css/normalise.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/xknob.css') {
    fs.readFile('css/xknob.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  // javascript
  else if (page == '/js/radio.js') {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'radio-world-50-000-radios-stations.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey
      }
    };

    // Grabs Top 50 Stations of current country from api, country selection will be added soon.
    // Only one api request will be used per client side request this way (will add post requests for country code
    // another day
    fetch(`https://radio-world-50-000-radios-stations.p.rapidapi.com/v1/radios/searchByCountry?query=us`, options)
      .then(res => res.json())
      .then(radioObj => {
        fs.readFile('js/radio.js', function(err, data) {
          res.writeHead(200, { 'Content-Type': 'text/javascript' });
          const json = JSON.stringify(radioObj);
          res.write(`let radioObj = ${json}\n`);
          res.write(data);
          res.end();
        });
      })
      .catch(err => console.log(`Received error ${err}`));

  }

  else if (page == '/js/xneedle.js') {
    fs.readFile('js/xneedle.js', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/xknob.js') {
    fs.readFile('js/xknob.js', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }
  else {
    figlet('404!!', function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, () => console.log('jsRadio has started on Port 8000!\nTune in to listen...'));
