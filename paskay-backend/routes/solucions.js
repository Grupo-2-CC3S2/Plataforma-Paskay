
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const upload = require('../libs/storage')

const Solucion = require('../models/solucion');

router.route('/')
.get(async (req, res, next) => {
  const solucion = await Solucion.find({});
  res.json(solucion);
})
.post(upload.single('image'),async (req, res, next) => {
  console.log(req.body)
  let { 
          likes,
          dislikes,
          url_image_solucion,
          usuario
        } = req.body;

  let _id = mongoose.Types.ObjectId();

  usuario = mongoose.Types.ObjectId(usuario)

  const solucion = new Solucion({ 
                                  _id,
                                  likes,
                                  dislikes,
                                  url_image_solucion,
                                  usuario
                                });
  if(req.file){
    const { filename } = req.file
    solucion.setImgUrl(filename)
  }
  await solucion.save();
  res.json({status: 'Solution Saved'});
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /solutions');
})
.delete(async (req, res, next) => {
    await Solucion.deleteMany({});
    res.end('Deleting all solutions');
});


router.route('/:id')
.get(async (req, res, next) => {
  const solucion = await Solucion.findById(req.params.id);
  console.log(solucion)
  res.json(solucion);
})
.post((req, res, next) => {
    res.end('POST operation not supported on /solutions/'+ req.params.id);
})
.put(async (req, res) => {

  const { 
          _id,
          likes,
          dislikes,
          url_image_solucion,
          usuario
        } = req.body;


  _id =  mongoose.Types.ObjectId(_id);
  usuario =  mongoose.Types.ObjectId(usuario);

  const newSolucion = new Solucion({ 
                                  _id,
                                  likes,
                                  dislikes,
                                  url_image_solucion,
                                  usuario
                                });

  await Solucion.findByIdAndUpdate(req.params.id, newSolucion);
  res.json({status: 'Solucion updated'});

})

.delete(async (req, res) => {
  await Solucion.findByIdAndRemove(req.params.id);
  res.json({status: 'Solucion Deleted'});
});

module.exports = router;
