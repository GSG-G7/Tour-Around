const getData = require('../database/queries/getData');
const { postPlace, postUser } = require('../database/queries/postData');

const homeData = (req, res, next) => {
  getData()
    .then(({ rows }) => res.status(200).render('home', { rows }))
    .catch((error) => next(error));
};

const postData = (req, res, next) => {
  postUser(req.body)
    .then(({ rows }) => postPlace(req.body, rows[0].user_id))
    .catch((error) => next(error));
  getData()
    .then(({ rows }) => res.status(200).render('home', { rows }));
};



module.exports = { homeData, postData };
