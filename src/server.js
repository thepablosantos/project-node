const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ name: 'Pablo', age: 32 });
});

app.get('/users', (req, res) => {
  res.json([{ name: 'Pablo', age: 32 }, { name: 'João', age: 20 }]);
});


app.post('/userdata/:id/:email', (request, response) => {
  console.log(request.body);
  console.log(request.params);
  console.log(request.query);
  console.log(request.headers);
  response.status(200).json({sucess: true});
})

app.listen(3000, () => console.log('Servidor backend ativo na porta 3000'));