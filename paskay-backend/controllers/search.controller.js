const Problema = require('../models/problema');

exports.search_in_db = (search_query, options) => {

  return Problema.find(
      {
        $text: {
          $search: search_query
        },
        universidad: {$regex: options.regex_universidad},
        //curso: {$regex: cursoSearch},
        tema: {$regex: options.regex_tema}
      },
      {
        score: {$meta: 'textScore'}
      }
    ).sort({
      score: {$meta: 'textScore'}
    });

}
