const connection = require('../config/connection');

const postPlace = (placeInfo, userID) => {
  return connection.query('insert into places (place_name,location,service,delivery,image,user_id) values ($1,$2,$3,$4,$5,$6)',
    [placeInfo.placeName, placeInfo.location, placeInfo.service, placeInfo.delivery, placeInfo.img, userID]);
};

const postUser = (userInfo) => {
  return connection.query('insert into users (user_name,email,phone) values ($1,$2,$3) RETURNING *',
    [userInfo.userName, userInfo.email, userInfo.phone]);
};


module.exports = {
  postPlace,
  postUser,
};
