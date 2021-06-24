const express = require('express');

const app = express();

const port = 3000;

app.get('/', function(req, res) {
  res.send('Esta es la pagina de inicio');
});

app.get('/servicios', function(req, res) {
  res.send('Esta es la pagina de servivcios');
});

app.use(express.static(__dirname + "/public"))

app.listen(port,() => {
  console.log("Server listening on port: ",port)
})
