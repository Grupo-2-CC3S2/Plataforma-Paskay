var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    nickname: {type: String, required:true, max: 20},
    nombre: {type: String, required:true, max: 15},
    apellido: {type: String, required:true, max: 15},
    correo: {type: String, required:true, max: 50}
  }
);


// Virtual for author's URL
UsuarioSchema
.virtual('url')
.get(function () {
  return '/catalog/usuario/' + this._id;
});

//Export model
module.exports = mongoose.model('Usuario', UsuarioSchema);
