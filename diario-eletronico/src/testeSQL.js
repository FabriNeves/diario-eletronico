import Sequelize from "sequelize";

const seque = new Sequelize("cadastroAlunos", "root", "meusql", {
    host: "localhost",
    dialect: "mysql",
});

seque.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});
