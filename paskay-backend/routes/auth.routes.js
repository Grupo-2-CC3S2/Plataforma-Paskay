
var express = require('express');

var router = express.Router();

let { signUp, signIn } = require("../controllers/auth.controller")
const { checkDuplicateUsernameOrEmail, checkRolesExisted } = require('../middlewares/verifySignup')

router.post('/signup',[checkRolesExisted, checkDuplicateUsernameOrEmail], signUp)
router.post('/signin', signIn)


module.exports = router;

