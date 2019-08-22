const {join} = require('path');
const {readFileSync} = require('fs');
const dbConnection = require('./config/connection');

let sql;
if(process.env.NODE_ENV === "test"){
  sql = readFileSync(join(__dirname, 'test_db.sql')).toString();
}else{
  sql = readFileSync(join(__dirname, 'db_build.sql')).toString();
}

const buildDB = () => {
  dbConnection.query(sql)
  .then((result) => console.log('Build Successfully'))
  .catch((err) => console.log(err.stack));
};

module.exports = buildDB;