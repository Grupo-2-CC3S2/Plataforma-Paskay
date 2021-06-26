var express = require('express');
var router = express.Router();

const Problema = require('../models/problema');
const Usuario = require('../models/usuario');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const usuario = await Usuario.find({"id_usr": "1"});
  console.log("obtenido",usuario)
  res.json(usuario);
});





module.exports = router;
