require('dotenv').config();

module.exports = require("knex")({
    client: "pg",
    connection: {
        host: process.env.dbhost,
        port: process.env.dbport,
        user: process.env.dbuser,
        password: process.env.dbpassword,
        database: process.env.dbname
    }
});