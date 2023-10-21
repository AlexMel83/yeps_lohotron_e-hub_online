require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const server = http.createServer(app);
const config = require('./backend/config/express.config');
const { routeInit } = require('./backend/src/presentation-layer/routes');

routeInit(app, express);

const staticSiteOptions = {
    portnum: 80, // слушать порт 80
    maxAge: 1000 * 60 * 15 // хранить страницы в кэше пятнадцать минут
};

// Запуск сайта:
express().use(express.static(
    path.join(__dirname, 'static'),
    staticSiteOptions
)).listen(staticSiteOptions.portnum);




server.listen(config.PORT, () => {
    console.log(`Server is runninng on port: ${config.PORT}`)
});