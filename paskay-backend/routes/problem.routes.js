var express = require('express');
var router = express.Router();

const { verifyToken, isAdmin } = require('../middlewares/authJwt')

const cors = require('cors');

const upload = require('../libs/storage')

var { uploadProblem,
      getAllProblems, 
      putProblems, 
      deleteAllProblems, 
      getProblem, 
      putProblem,
      deleteProblem } = require('../controllers/problem.controller')

router.route('/')
.get([verifyToken, isAdmin],getAllProblems)
.post(cors(),[verifyToken], upload.single('image'),uploadProblem)
.put(putProblems)
.options(cors(),(req, res, next) => {
    res.end();
})
.delete([verifyToken, isAdmin], deleteAllProblems);

router.route('/:id')
.get(getProblem)
.post((req, res, next) => {
    res.end('POST operation not supported on /problems/'+ req.params.id);
})
.put([verifyToken], putProblem)
.delete([verifyToken], deleteProblem);

module.exports = router;
