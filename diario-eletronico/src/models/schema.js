import Sequelize from "sequelize";

const sequelize = new Sequelize("cadastroAlunos", "root", "meusql", {
    host: "localhost",
    dialect: "mysql",
});


const Aluno = sequelize.define("alunos", {
    nome: {
        type: Sequelize.STRING
    },
    genero: {
        type: Sequelize.STRING
    },
    dataDeNascimento: {
        type: Sequelize.DATE
    },
    idade: {
        type :Sequelize.INTEGER
    },
    disciplina: {
        type: Sequelize.STRING
    },
    nota : {
        type :Sequelize.FLOAT
    },
    situacaoFinal: {
        type:Sequelize.STRING
    },
})
  

Aluno.sync({force:true});
  
export default Aluno;