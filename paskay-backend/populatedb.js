
console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Problema = require('./models/problema')
var Solucion = require('./models/solucion')
var Tema = require('./models/tema')
var Usuario = require('./models/usuario')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var problemas = []
var temas = []
var usuarios = []
var solucions = []


function problemaCreate(    
  id_problema,
  id_usuario,
  likes,
  dislikes,
  description,
  claves,
  anio_tomado,
  universidad,
  id_tema,
  url_image,
  id_solucion,cb) {
  problemadetail = {
    id_problema:id_problema,
    id_usuario:id_usuario,
    likes:likes,
    dislikes:dislikes,
    description:description,
    claves:claves,
    anio_tomado:anio_tomado,
    universidad:universidad,
    id_tema:id_tema,
    url_image:url_image,
    id_solucion:id_solucion,
   }
  //if (d_birth != false) authordetail.date_of_birth = d_birth
  //if (d_death != false) authordetail.date_of_death = d_death
  
  var problema = new Problema(problemadetail);
       
  problema.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Problema: ' + problema);
    problemas.push(problema)
    cb(null, problema)
  }  );
}

function solucionCreate(id_solucion,
  likes,
  dislikes,
  url_image_solucion,
  id_usuario, cb) {
  soluciondetail = {
    id_solucion:id_solucion,
    likes:likes,
    dislikes:dislikes,
    url_image_solucion:url_image_solucion,
    id_usuario:id_usuario}
  //if (d_birth != false) authordetail.date_of_birth = d_birth
  //if (d_death != false) authordetail.date_of_death = d_death
  
  var solucion = new Solucion(soluciondetail);
       
  solucion.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Solucion: ' + solucion);
    solucions.push(solucion)
    cb(null, solucion)
  }  );
}

function usuarioCreate(    id_usr,
  nickname,
  nombre,
  apellido,
  correo, cb) {
  usuariodetail = {id_usr:id_usr,
    nickname:nickname,
    nombre:nombre,
    apellido:apellido,
    correo:correo}
  //if (d_birth != false) authordetail.date_of_birth = d_birth
  //if (d_death != false) authordetail.date_of_death = d_death
  
  var usuario = new Usuario(usuariodetail);
       
  usuario.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Usuario: ' + usuario);
    usuarios.push(usuario)
    cb(null, usuario)
  }  );
}


function temaCreate(    id_tema,
  curso,
  nombre_tema,
  subtemas, cb) {
  temadetail = {id_tema:id_tema,
    curso:curso,
    nombre_tema:nombre_tema,
    subtemas:subtemas}
  //if (d_birth != false) authordetail.date_of_birth = d_birth
  //if (d_death != false) authordetail.date_of_death = d_death
  
  var tema = new Tema(temadetail);
       
  tema.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New tema: ' + tema);
    temas.push(tema)
    cb(null, tema)
  }  );
}



function createProblema(cb) {
    async.series([
        function(callback) {
          problemaCreate('1','1','1','0','De entre todos los rectángulos con igual perímetro, ¿cuál es el de mayor área?',['5','4','1','0','6','na'],'2010-03-10','UNI','Optimizacion','./imagenes/problema1.jpg',
            1, callback);
        },
        function(callback) {
          problemaCreate('2','2','2','1','|x+6|-8=4x',['0','4','5','0','6','na'],'2015-08-15','UNI','Valor Absoluto','./imagenes/problema2.jpg',
            2, callback);
        },
        function(callback) {
          problemaCreate('3','2','4','2','Halle la ecuacion de la parabola, con vertice (2,4) y foco 4',['0','4','6','0','2','nb'],'2015-08-15','SAN MARCOS','Conicas','./imagenes/problema3.jpg',
            3, callback);
        }
        ],
        // optional callback
        cb);
}


function createSolucion(cb) {
    async.parallel([
        function(callback) {
          solucionCreate('10','1','0','./imagenes/solucion2.jpg','2', callback);
        },
        function(callback) {
          solucionCreate('20','3','1','./imagenes/solucion1.jpg','1', callback);
        },
        function(callback) {
          solucionCreate('30','9','2','./imagenes/solucion3.jpg','3', callback);
        }
        ],
        // optional callback
        cb);
}


function createUsuario(cb) {
    async.parallel([
        function(callback) {
          usuarioCreate('1','PabRo','Pablo','Rojas','pablito@gmail.com', callback)
        },
        function(callback) {
          usuarioCreate('2','PeCo','Pepe','Coronel','pepito@gmail.com', callback)
        },
        function(callback) {
          usuarioCreate('3','CaRo','Carlos','Rojas','carlitos@gmail.com', callback)
        }
        ],
        // Optional callback
        cb);
}

function createTema(cb) {
  async.parallel([
      function(callback) {
        temaCreate('1','Algebra','Funciones','Funcion cuadratico', callback)
      },
      function(callback) {
        temaCreate('2','Trigonometria','Conicas','Parabola', callback)
      },
      function(callback) {
        temaCreate('3','Algebra','Optimizacion','Optimizacion', callback)
      }
      ],
      // Optional callback
      cb);
}



async.series([
    createProblema,
    createSolucion,
    createUsuario,
    createTema
],


// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BASE CREADA !!! ');
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});






