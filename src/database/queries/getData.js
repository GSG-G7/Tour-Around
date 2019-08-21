
const connection = require('../config/connection');

const getData = () => connection.query('SELECT * FROM places inner join users on places.user_id = users.user_id');

module.exports = getData;

// users.name, users.phone, places.name, places.location, places.service, places.delivery, places.image
