const multer = require('multer');
const fs = require('fs');
const readline = require('readline');
const { once } = require('events');//Captura um determinado evento usando a função 'once'
const {decoded} = require('./decodeFunction');

module.exports = {

    async uploadDecode(req, res){
        // Restrição de arquivos
        const upload = multer({
            dest: 'src/upload_files/',

            fileFilter: (req, file, cb) => {
                if(file.mimetype != 'text/plain' && !file.mimetype.includes('log')){
                    return res.status(422).send({message: 'Formato de arquivo inválido.'});
                }
                cb(null, true);
            }
        }).single('attachment');
        
        // Processamento do arquivo
        upload(req, res, async (err) => { //Acrescentado um async, caso contrario o await não funciona
            if(err) { // Se der erro
                console.log(err);
                res.status(422).send();
            }else { // Se der certo
                let file = req.file;

                if(file == undefined){
                    return res.status(422).send({message: 'Arquivo não selecionado.'});
                }else{
                    const path = await processFile(file);
                    if (path){
                        // Para o usuário receber o arquivo desofuscado
                        console.log('Efetuando o download')
                        res.download(path, file.originalname);
                    }else{
                        res.status(500).send();
                    }
                }
            }
        });

        //Transformei numa função async por causa do {once}
        async function processFile(file) {
            const outpath = `${process.env.OUTDIR}/${file.filename}`;
    
            // Vai escrevendo no final do arquivo
            const writeStream = fs.createWriteStream(outpath, {
                flags: 'a'
            });
            
            // Retorna caso tenha erro de escrita, não foi possível desofuscar
            writeStream.on('error', (err) => {
                console.log(err);
                throw err;
            })
    
            //Leitura do arquivo linha a linha
            const readInterface = readline.createInterface({
                input: fs.createReadStream(file.path)
            });
    
            // Imprime linha a linha o arquivo desofuscado
            // Aqui que será feito o desofuscamento
            readInterface.on('line', (line) => {
                console.log('Escrevendo linha')
                writeStream.write(`${decoded(line)}\n`)
            });
    
            // Fecha após leitura do arquivo
            readInterface.on('close', () => {
                console.log('Fechar')
                writeStream.end();
            });
    
            // Aguarda ler todo o arquivo antes de fechar e efetuar o download
            await once(writeStream, 'finish');

            return outpath;
        }
    
    },

    async StringDecoder(req, res){
        const {encoded} = req.body;

        if(encoded == ""){
            return res.status(422).send({message: 'String invalida'});
            
        }else{
            const stringDecoded = decoded(encoded);
            return res.status(200).send(stringDecoded)
        }
    }
}