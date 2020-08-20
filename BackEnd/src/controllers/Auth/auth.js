const jwt = require('jsonwebtoken');

require('dotenv').config();

const auth = (req, res, next) => {

    let token = req.headers['authorization'];

    if(!token) {
        return req.status(401).json({
            error: [{
                value: '',
                msg: 'acesso negado!'
            }]
        })
    }

    token = token.split (' ').pop();
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err) {
            return req.status(401).json({
                error: [{
                    value: '',
                    msg: 'acesso negado!'
                }]
            })
        }      
        next();
    });
};

module.exports = auth;