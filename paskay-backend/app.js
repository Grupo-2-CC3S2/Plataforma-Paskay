const express = require('express');

const app = express();

const port = 3000;

app.use(express.static(__dirname + "/public"))

app.get('/', function(req, res) {
  res.send('Esta es la pagina de inicio');
});

app.get('/servicios', function(req, res) {
  res.send('Esta es la pagina de servivcios');
});


app.listen(port,() => {
  console.log("Server listening on port: ",port)
})
