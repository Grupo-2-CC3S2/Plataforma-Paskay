var express = require('express');
var router = express.Router();

const upload = require('../libs/storage')

var { uploadProblem,
      getAllProblems, 
      putProblems, 
      deleteAllProblems, 
      getProblem, 
      putProblem,
      deleteProblem} = require('../controllers/problem')

router.route('/')
.get(getAllProblems)
.post(upload.single('image'),uploadProblem)
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
