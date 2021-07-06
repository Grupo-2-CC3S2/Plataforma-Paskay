var express = require('express');
var router = express.Router();

const Problema = require('../models/problema');

/* GET home page. */
router.get('/', async (req, res, next) => {
  //const usuario = await Problema.find({"id_usr": "1"});
  //console.log("obtenido",usuario)
  console.log(req.query.search_query)
  let results;
  if(req.query.search_query){
    results = await Problema.find(
      {
        $text: {
          $search: req.query.search_query
        }
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
