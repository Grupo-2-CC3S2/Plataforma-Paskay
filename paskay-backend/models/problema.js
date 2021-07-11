var mongoose = require('mongoose');

const { appConfig } = require('../config')

var Schema = mongoose.Schema;

var ProblemaSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    likes: {type: Number, required:true},
    dislikes: {type: Number, required:true},
    //name: {type: String, text: true, required:true, max: 1000, index: true},
    enunciado: {type: String, text: true, required:true, max: 1000, index: true},
    name: {type: String, text: true, required:true, max: 1000, index: true},
    opciones: [{type: String}],
    anio: {type: String},
    universidad: {type: String, required:true, max: 100},
    tema: {type: String, required:true, max: 50},
    url_image: {type: String, max: 200},
    soluciones: [{ type: Schema.Types.ObjectId, ref: 'Solucion' }]
  }
);

ProblemaSchema.index(
                    {
                        'name': "text", 
                        'enunciado': "text" 
                    }
                ); // schema level

ProblemaSchema.methods.setImgUrl = function setImgUrl (filename) {
  const { host, port } = appConfig;
  this.url_image = `${host}:${port}/public/${filename}`
}

ProblemaSchema
.virtual('url')
.get(function () {
  return '/catalog/problema/' + this._id;
});

//Export model
module.exports = mongoose.model('Problema', ProblemaSchema);
