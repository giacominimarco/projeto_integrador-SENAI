const { Model, DataTypes } = require('sequelize');

//É o objeto que está pegando as informações do usuário e está armazenando no banco;
class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Preencha o campo com um nome válido"
                    },
                    len: {
                        args: [3, 20],
                        msg: "O campo 'Nome' deve ter entre 3 e 20 caracteres",
                    }

                }
            },
            email: {
                type: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        isEmail: {
                            msg: "Preencha o campo com um email válido"
                        }
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Coloque sua senha"
                    }
                }
            }
        }, {
            sequelize
        })
    }
}
module.exports = User;