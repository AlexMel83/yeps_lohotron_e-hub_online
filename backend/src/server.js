require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors')

const corsOptions = {
    origin: '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
const server = http.createServer(app);
const config = require('../config/express.config');
const { routeInit } = require('./presentation-layer/routes');

routeInit(app, express);

server.listen(config.PORT, () => {
    console.log(`Server is runninng on port: ${config.PORT}`)
});