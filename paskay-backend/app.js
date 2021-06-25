const express = require('express');

const app = express();

const port = 3000;

<<<<<<< HEAD
app.use(express.static(__dirname + "/public"))

=======
>>>>>>> c17288c2cb16c9acf64f828607eea1c94162faa5
app.get('/', function(req, res) {
  res.send('Esta es la pagina de inicio');
});

app.get('/servicios', function(req, res) {
  res.send('Esta es la pagina de servivcios');
});

<<<<<<< HEAD
=======
app.use(express.static(__dirname + "/public"))
>>>>>>> c17288c2cb16c9acf64f828607eea1c94162faa5

app.listen(port,() => {
  console.log("Server listening on port: ",port)
})
