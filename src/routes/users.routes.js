const {Router} = require('express');
const router = Router();
const { renderlogin, postlogin, renderRegister, register}  = require('../controllers/users.controller')



router.get('/login',renderlogin);
router.post('/login', postlogin);


router.get('/register',renderRegister);
router.post('/register',register);



module.exports = router;
