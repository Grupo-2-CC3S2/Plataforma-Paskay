
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Problema = require('../models/problema');

router.route('/')
.get(async (req, res, next) => {
  const problemas = await Problema.find({});
  res.json(problemas);
})
.post(async (req, res, next) => {
  console.log(req.body)
  const { 
          usuario,
          likes,
          dislikes,
          description,
          claves,
          anio_tomado,
          universidad,
          id_tema,
          url_image,
          soluciones
        } = req.body;

  let _id = mongoose.Types.ObjectId();
  usuario = mongoose.Types.ObjectId(usuario);
  let soString = soluciones
  soluciones = []
  for (sol in soString){
    soluciones.push(mongoose.Types.ObjectId(soString[sol]))
  }
  const problema = new Problema({ 
                                  _id,
                                  usuario,
                                  likes,
                                  dislikes,
                                  description,
                                  claves,
                                  anio_tomado,
                                  universidad,
                                  id_tema,
                                  url_image,
                                  soluciones
                                });
  await problema.save();
  res.json({status: 'Problem Saved'});
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete(async (req, res, next) => {
    await Problema.deleteMany({});
    res.end('Deleting all users');
});


router.route('/:id')
.get(async (req, res, next) => {
  const problem = await Problema.findById(req.params.id);
  res.json(problem);
})
.post((req, res, next) => {
    res.end('POST operation not supported on /problems/'+ req.params.id);
})
.put(async (req, res) => {

  const { 
          _id,
          usuario,
          likes,
          dislikes,
          description,
          claves,
          anio_tomado,
          universidad,
          id_tema,
          url_image,
          soluciones
        } = req.body;

  usuario = mongoose.Types.ObjectId(usuario);

  let soString = soluciones
  soluciones = []
  for (sol in soString){
    soluciones.push(mongoose.Types.ObjectId(soString[sol]))
  }

  const newProblema = new Problema({ _id,
                                  usuario,
                                  likes,
                                  dislikes,
                                  description,
                                  claves,
                                  anio_tomado,
                                  universidad,
                                  id_tema,
                                  url_image,
                                  soluciones
                                });

  await Problema.findByIdAndUpdate(req.params.id, newProblema);
  res.json({status: 'Problem updated'});

})

.delete(async (req, res) => {
  await Problema.findByIdAndRemove(req.params.id);
  res.json({status: 'Problem Deleted'});
});

module.exports = router;
