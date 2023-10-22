require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

const server = http.createServer(app);
const config = require('./config/express.config');
const { routeInit } = require('./src/presentation-layer/routes');

routeInit(app, express);

const staticSiteOptions = {
    portnum: 80, // слушать порт 80
    maxAge: 1000 * 60 * 0 // хранить страницы в кэше пятнадцать минут
};

// Запуск сайта:
express().use(express.static(
    path.join(__dirname, '../static'),
    staticSiteOptions
)).listen(staticSiteOptions.portnum);




server.listen(config.PORT, () => {
    console.log(`Server is runninng on port: ${config.PORT}`)
});