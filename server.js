const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSitemapXml = require('express-sitemap-xml');

const config = require('./configs/config');

const router = require('./routes/main.route');
const connection = require('./services/connections.service');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

app.use(expressSitemapXml(getUrls, config.websiteUrl));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(router);

async function getUrls() {
  // return await getUrlsFromDatabase();
  let urlsArray = ['/mockups', '/index', '/1', '/2'];
  return await urlsArray;
}


app.listen(1337, function() {
  console.log('Server was starting');
})