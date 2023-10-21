const env = require('../../transferenv.js')

const pg = require('pg');
const fs = require('fs');
const sql = fs.readFileSync('pg_phone_demo.sql').toString();

const { dbpassword, dbuser, dbhost, dbname, dbport } = env;

const config = {
    host: dbhost,
    user: dbuser,
    database: dbname,
    password: dbpassword,
    port: dbport
}

const pool = new pg.Pool(config);

pool.connect((err, client, done) => {
    if (err) {
        console.log("error: ", err);
        process.exit(1);
    }
    client.query(sql, function (err, _) {
        done();
        if (err) {
            console.log("error: ", err);
            process.exit(1);
        }
        process.exit(0);
    });
})

pool.end();