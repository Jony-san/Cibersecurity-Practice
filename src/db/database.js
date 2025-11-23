import { Sequelize } from "sequelize";
import dotenv from "dotenv";

//iniciar variables de entorno
dotenv.config();

export const sequelize = new Sequelize(
  process.env.database,// database
  process.env.username,// username
  process.env.password,// password
  {
    host: "localhost",
    dialect: "mysql",
    logging: false, // quita logs feos
  }
);