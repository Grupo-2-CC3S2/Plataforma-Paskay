
var express = require('express');

var router = express.Router();

const cors = require('cors');

let { signUp, signIn } = require("../controllers/auth.controller")
const { checkDuplicateUsernameOrEmail, checkRolesExisted } = require('../middlewares/verifySignup')

router.post('/signup',cors(), [checkRolesExisted, checkDuplicateUsernameOrEmail], signUp)
router.post('/signin', cors(), signIn)
router.options('signin', cors(),(req, res, next) => {
    res.end();
})

router.route('/signup')
.post(cors(), signUp)
.options(cors(),(req, res, next) => {
    res.end();
})

router.route('/signin')
.post(cors(), signIn)
.options(cors(),(req, res, next) => {
    res.end();
})




module.exports = router;

