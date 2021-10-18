// npm run dev
const express = require('express');
const app = express();
const cors = require('cors')
const hostname = "192.168.15.7";
const port = "3000";

//middlewares => funções que executam antes que cheguem as rotas
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));//função do express permite que envio dado atraves de formulario ele é capaz de processalo, o false significa so formato simples de formulario


//rotas
app.use(require('./routes/index'));

app.listen(port, hostname);
console.log('Server on port 3000');