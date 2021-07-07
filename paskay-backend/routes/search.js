var express = require('express');
var router = express.Router();
const cors = require('cors');

const Problema = require('../models/problema');

/* GET home page. */
router.get('/', cors(), async (req, res, next) => {
  //const usuario = await Problema.find({"id_usr": "1"});
  //console.log("obtenido",usuario)
  console.log(req.query.search_query)
  let results;
  let cursoSearch = ".";
  let temaSearch = ".";
  let anioSearch = ".";
  let uniSearch = "UNI";
  if(req.query.search_query){
    results = await Problema.find(
      {
        $text: {
          $search: req.query.search_query
        },
        universidad: {$regex: uniSearch},
        //curso: {$regex: cursoSearch},
        id_tema: {$regex: temaSearch}
      },
      {
        score: {$meta: 'textScore'}
      }
    ).sort({
      score: {$meta: 'textScore'}
    });
  }
  res.json(results)
});

module.exports = router;
