const {Router} = require('express');
const router = Router();
const {login_get, login_post} = require('../controllers/authController');

router.get('/login',login_get);
router.post('/login',login_post);



module.exports = router;