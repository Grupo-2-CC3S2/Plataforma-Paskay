var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SolucionSchema = new Schema(
  {
    id_solucion: {type: String, required:true, max: 50}, //UNIQUE
    likes: {type: String, required:true, max: 50},
    dislikes: {type: String, required:true, max: 50},
    url_image_solucion: {type: String, required:true, max: 200},
    id_usuario: {type: String, required:true, max: 50}
  }
);

// Virtual for author's URL
SolucionSchema
.virtual('url')
.get(function () {
  return '/catalog/solucion/' + this._id;
});

//Export model
module.exports = mongoose.model('Solucion', SolucionSchema);