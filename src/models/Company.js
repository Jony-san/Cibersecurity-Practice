import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

const Company = sequelize.define("Company", {// nombre del modelo
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,//clave primaria
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false,
  }
}, {
  tableName: "companies",// nombre de la tabla en la base de datos
  timestamps: true,// agrega campos createdAt y updatedAt
});

export default Company;
