const {join} = require('path');
const {readFileSync} = require('fs');
const dbConnection = require('./config/connection');

const sql = readFileSync(join(__dirname, 'db_build.sql')).toString();

dbConnection.query(sql)
  .then((result) => console.log('Build Successfully'))
  .catch((err) => console.log(err.stack));

