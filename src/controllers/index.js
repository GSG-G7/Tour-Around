const router = require('express').Router();

const homeData = require('./homeData');

router.get('/', homeData);

module.exports = router;
