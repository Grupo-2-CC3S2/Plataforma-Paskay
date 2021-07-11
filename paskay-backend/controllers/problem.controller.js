
const Problema = require('../models/problema');

var mongoose = require('mongoose');

exports.uploadProblem = async (req, res, next) => {

  console.log(req.body)

  let { 
          //usuario,
          enunciado,
          opciones,
          anio,
          universidad,
          tema/*,
          url_image,
          soluciones*/
        } = req.body;

  let _id = mongoose.Types.ObjectId();
  //usuario = mongoose.Types.ObjectId(usuario);
  let usuario = mongoose.Types.ObjectId();
  let name = "Pregunta prueba"
  let soluciones = []
  
  /*
  let soString = soluciones
  soluciones = []
  for (sol in soString){
    soluciones.push(mongoose.Types.ObjectId(soString[sol]))
  }
  */
  let likes = 0;
  let dislikes = 0;
  const problema = new Problema({ 
                                  _id,
                                  usuario,
                                  likes,
                                  dislikes,
                                  name,
                                  enunciado,
                                  opciones,
                                  anio,
                                  universidad,
                                  tema,
                                  soluciones
                                });
  if(req.file) {
    const {filename} = req.file
    problema.setImgUrl(filename)

  }
  await problema.save();
  res.json({status: 'Problem Saved'});
}


exports.getAllProblems = async (req, res, next) => {
  const problemas = await Problema.find({});
  console.log(problemas);
  res.json(problemas);
}


exports.putProblems = (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
}

exports.deleteAllProblems = async (req, res, next) => {
    await Problema.deleteMany({});
    res.end('Deleting all users');
}

exports.getProblem = async (req, res, next) => {
  const problem = await Problema.findById(req.params.id);
  res.json(problem);
}

exports.putProblem = async (req, res) => {

  let { 
          _id,
          usuario,
          likes,
          dislikes,
          name,
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
                                  name,
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

}

exports.deleteProblem = async (req, res) => {
  await Problema.findByIdAndRemove(req.params.id);
  res.json({status: 'Problem Deleted'});
}
