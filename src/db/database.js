import Sequelize from "sequelize";

const conection = new Sequelize(
    "test",// database
    "jonyprueba",// username
    "prueba",// password
    {
        host: "localhost",
        dialect: "mysql"
    }
);

export default conection;