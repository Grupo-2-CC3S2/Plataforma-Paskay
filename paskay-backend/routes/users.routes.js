var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');

var mongoose = require('mongoose');

const { verifyToken, isAdmin } = require('../middlewares/authJwt')

const { checkDuplicateUsernameOrEmail, checkRolesExisted } = require('../middlewares/verifySignup')

router.use(bodyParser.json());

const Usuario = require('../models/usuario');

let { getUser, getAllUsers, createUser, deleteUser, deleteAllUsers, updateUser } = require('../controllers/users.controller')

router.route('/')
.get([verifyToken, isAdmin], getAllUsers)
.post([verifyToken, isAdmin, checkRolesExisted, checkDuplicateUsernameOrEmail], createUser)
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete([verifyToken, isAdmin], deleteAllUsers);

router.route('/:Id')
.get([verifyToken, isAdmin], getUser)
.post((req, res, next) => {
    res.end('POST operation not supported on /users/'+ req.params.Id);
})
.put([verifyToken, isAdmin], updateUser)
.delete([verifyToken, isAdmin], deleteUser);


module.exports = router;
