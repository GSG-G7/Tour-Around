const { Pool } = require('pg');
require('env2')('./config.env');

let DB_URL = '';

if(process.env.NODE_ENV === "test"){
  DB_URL=process.env.DB_URL_TEST;
}else if(process.env.NODE_ENV==="production"){
  DB_URL=process.env.HEROKU_DB_URL;
}else{
  DB_URL=process.env.DB_URL;
}


const options = {
  connectionString: DB_URL,
  ssl: true,
};

if (!DB_URL) throw new Error('DB_URL not found');
module.exports = new Pool(options);
