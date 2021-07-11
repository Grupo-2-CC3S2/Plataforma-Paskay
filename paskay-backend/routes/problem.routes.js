var express = require('express');
var router = express.Router();

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
.get(getAllProblems)
.post(cors(),upload.single('image'),uploadProblem)
.put(putProblems)
.delete(deleteAllProblems);

router.route('/:id')
.get(getProblem)
.post((req, res, next) => {
    res.end('POST operation not supported on /problems/'+ req.params.id);
})
.put(putProblem)
.delete(deleteProblem);

module.exports = router;
