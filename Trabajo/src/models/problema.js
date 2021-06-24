var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProblemaSchema = new Schema(
  {
    id_problema: {type: String, required:true, max: 100},
    id_usuario: {type: String, required:true, max: 100},
    likes: {type: String, required:true, max: 100},
    dislikes: {type: String, required:true, max: 100},
    description: {type: String, required:true, max: 1000},
    claves: {type: Array},
    anio_tomado: {type: Date},
    universidad: {type: String, required:true, max: 50},
    id_tema: {type: String, required:true, max: 50},
    url_image: {type: String, required:true, max: 200},
    id_solucion: {type: String, required:true, max: 50}
  }
);

// Virtual for author's URL
ProblemaSchema
.virtual('url')
.get(function () {
  return '/catalog/problema/' + this._id;
});

//Export model
module.exports = mongoose.model('Problema', ProblemaSchema);