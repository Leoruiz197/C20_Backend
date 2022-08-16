require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database');
const route = require('./src/routes/paletas.route');


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
  
connectToDatabase();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/paletas',route);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});