const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  //Função para pesquisar todos os usuários do banco de dados
  async index(req, res) {
    const users = await User.findAll();

    return res.status(200).send({ users: users });
  },
  //Função para pesquisar um usuário específico do banco de dados
  async indexOne(req, res) {
    const { id } = req.params;
    console.log(id);
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    if (user === null) {
      return res.status(422).send({ message: "Não existe este usuário" });
    }
    return res.status(200).send({ user: user });
  },
  //Função para criar um usuário com nome,senha e email como requisitos funcionais
  async store(req, res) {
    try {
      const { name, email, password } = req.body;
      //Verificar se o e-mail já consta no banco de dados.
      if (await User.findOne({
        where: {
          email: email,
        },
      }))
        return res.status(422).send({ message: 'E-mail duplicado' });

      const hash = await bcrypt.hash(password, 8);
      const user = await User.create({ name, email, password: hash });
      return res.status(200).json(user);

    } catch (err) {
      return res.status(422).json(err);
    }
  },
  //Função para deletar o usuário de acordo com o id como parâmetro.
  async delete(req, res) {
    const { id } = req.params;

    await User.destroy({ where: { id } });

    return res.status(204).send({ message: "Usuário deletado com sucesso1" });
  },
  //Função para atualizar as informações do usuário como: Nome, email e senha.
  async updated(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      await User.update(
        {
          name: name,
          email: email,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).send();

    } catch (err) {
      return res.status(422).json(err);
    }
  },
  //Função para atualizar as informações do usuário como: senha.
  async updatedPassword(req, res) {
    const { id } = req.params;
    const { password } = req.body;

    await User.update(
      {
        password: password,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).send();
  },
};
