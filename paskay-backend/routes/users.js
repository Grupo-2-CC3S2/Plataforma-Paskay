var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');

var mongoose = require('mongoose');

router.use(bodyParser.json());

const Usuario = require('../models/usuario');

router.route('/')
.get(async (req, res, next) => {
  const usuarios = await Usuario.find({});
  console.log(usuarios)
  res.json(usuarios);
})
.post(async (req, res, next) => {
    console.log(req.body)
   const { 
          nickname,
          nombre,
          apellido,
          correo
        } = req.body;

  let _id = mongoose.Types.ObjectId();

  const usuario = new Usuario({ 
                                  _id,
                                  nickname,
                                  nombre,
                                  apellido,
                                  correo
                                });
  await usuario.save();
  res.json({status: 'Problem Saved'});

})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete(async (req, res, next) => {
    await Usuario.deleteMany({});
    res.end('Deleting all users');
});


router.route('/:Id')
.get(async (req, res, next) => {
  try{
    const user = await Usuario.findById(req.params.Id);
    res.json(user);
  } catch(error){
    console.log(error)
    res.statusCode = 400
    res.end()
  }
  //res.send('respond with a resource');
})
.post((req, res, next) => {
    res.end('POST operation not supported on /users/'+ req.params.Id);
})
.put(async (req, res, next) => {
    res.statusCode = 403;
  const { 
              _id,
              nickname,
              nombre,
              apellido,
              correo
       } = req.body;

      _id =  mongoose.Types.ObjectId(_id);

  const newUser = new Usuario({ 
                                      _id,
                                      nickname,
                                      nombre,
                                      apellido,
                                      correo
                                  });

  await Usuario.findByIdAndUpdate(req.params.Id, newUser);
  res.json({status: 'User updated'});
})
.delete(async (req, res, next) => {
    await Usuario.findByIdAndDelete(req.params.Id);
    res.end('Deleting user');
});

/*

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.get((req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})
.post((req, res, next) => {
	res.statusCode = 403
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

*/

module.exports = router;
