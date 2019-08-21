const getData = require('../database/queries/getData');
const { postPlace, postUser } = require('../database/queries/postData');

const homeData = (req, res) => {
  getData()
    .then(({ rows }) => res.status(200).render('home', { rows }))
    .catch((error) => console.log(error));
};

const postData = (req, res) => {
  postUser(req.body)
    .then(({ rows }) => postPlace(req.body, rows[0].user_id))
    .catch((error) => console.log(error));
};


module.exports = { homeData, postData };
