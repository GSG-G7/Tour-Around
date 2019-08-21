const getData = require('../database/queries/getData');

const homeData = (req, res) => {
  getData()
    .then(({ rows }) => res.status(200).render('home', { rows }))
    .catch((error) => console.log(error));
};

module.exports = homeData;
