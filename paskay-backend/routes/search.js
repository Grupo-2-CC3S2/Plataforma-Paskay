var express = require('express');
var router = express.Router();

const Problema = require('../models/problema');

/* GET home page. */
router.get('/',(req, res, next) => {
  //const usuario = await Problema.find({"id_usr": "1"});
  //console.log("obtenido",usuario)
  console.log(req.query)
  res.json({response : "esta es la respuesta"})
  res.end()
});

module.exports = router;
