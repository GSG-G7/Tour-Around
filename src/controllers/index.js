const router = require('express').Router();

const {homeData, postData} = require('./homeData');

router.get('/', homeData);
router.post('/postPlace', postData);

module.exports = router;
