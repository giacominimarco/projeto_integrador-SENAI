const express = require('express');
const cors = require('cors');
require('./database');
const routes = require('./routes');
require('dotenv').config();
const app = express();


const fs = require('fs');

app.use(cors());

app.use(express.json());
app.use(routes);


// Cria um diretório aonde será armazenado os arquivos
fs.access(process.env.OUTDIR, fs.constants.F_OK, (err) => {
    if(err) {
        fs.mkdir(process.env.OUTDIR, (err) => {
            if(err) throw err;
            console.log(`${process.env.OUTDIR} criado com sucesso! `)
        })
    }else {
        fs.stat(process.env.OUTDIR, (err, stats) => {
            if(err) throw err;
            if(!stats.isDirectory()) {
                throw new Error(`${process.env.OUTDIR} existe e não é um diretório`)
            }
        });
    }
});

app.listen(3333);