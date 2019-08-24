const router = require('express').Router();

const { homeData, postData } = require('./homeData');
const { clientError, serverError } = require('./err');

router.get('/', homeData);
router.post('/postPlace', postData);

router.use(clientError);
router.use(serverError);

module.exports = router;
