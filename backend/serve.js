import express from 'express';

import executarQuary from './sql/db.js';


const app = express();
app.use(express.json());

app.get('/noticias', async (req, res) => {
    let query =
    `Select
        titulo,
        descricao,
        imagem,
         link
    From
        noticias`;
    let resultado = await executarQuary(query);
    res.send(resultado[0]);
});

const app = express();
app.use(express.json());

app.get('/check', async (req, res) => {
    var status = {
        status: "Running.."
    };
    res.send(status);
});

app.post('/check', async (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/hello', async (req, res) => {
    var hello = {
        hello: "Hello from Teacher!"
    };
    res.send(hello);
});

app.post('/hello', async (req, res) => {
    try {
        res.send({
            hello: `Arthur diz olá pra você ${req.body.name}`
        })
    }
    catch{
        res.send({
            hello: 'fail'
        })
    }
});

app.listen(3000, () =>{
    console.log("Servidor online em http://localhost:3000");
});