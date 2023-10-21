require('dotenv').config();

let { dbpassword, dbuser, dbhost, dbname, dbport } = process.env;
console.log(dbuser)
module.exports = {
    dbpassword, dbuser, dbhost, dbname, dbport
}