// npm run dev
const express = require('express');
const app = express();
const cors = require('cors')
const hostname = "192.168.15.7";
const port = "3000";

//middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//rotas
app.use(require('./routes/index'));

app.listen(port, hostname);
console.log('Server on port 3000');