// Make sure to set up the server and install the required modules using npm
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const PORT = 8000

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
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
    fs.readFile('js/radio.js', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
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

server.listen(process.env.port || PORT, () => console.log('jsRadio has started on Port 8000!\nTune in to listen...'));
