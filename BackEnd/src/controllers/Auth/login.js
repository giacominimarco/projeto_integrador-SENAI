const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../../models/User");
require('dotenv').config();

module.exports = {
  async login(req, res) {
    const errors = validationResult(req);
    const { email, password } = req.body;
    //Verificar se existe os erros
    if (errors.isEmpty()) {
      User.findOne({
        where: { email: email }
      }).then(User => {
        bcrypt.compare(password, User.password)
          .then(result => {
            //Se estiver ok, a comparação e o email, irá utilizar as funções do
            //JWT pra efetuar o login e gerar o token, mandando as informações 
            //do usuário.
            if (result) {
              const token = jwt.sign({
                name: User.name,
                email: User.email
              }, process.env.SECRET);

              return res.json({
                token: token
              })
              //Se não retorna erro, dizendo que ou a senha ou o usuário está
              //errado.
            } else {
              return res.status(404).json({
                errors: [{
                  value: '',
                  msg: 'Usuário e senha incorretos.'
              }]
              })
            }
          })
        //E se não estiver em nenhum daqueles problemas, retornará com erro no 
        //servidor
      }).catch(errors => {
        return res.status(500).json({
          errors: [{
            value: '',
            msg: 'Falha ao comunicar com o servidor'
        }]
        })
      });
      //Retorna os erros do Express-validador
    } else {
      return res.status(422).json(errors);
    }
  }
}

