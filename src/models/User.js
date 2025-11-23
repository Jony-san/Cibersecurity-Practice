import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

const User = sequelize.define("User", {// nombre del modelo
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,//clave primaria
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  /// 👇 Clave foránea
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "companies",
      key: "id"
    },
    allowNull: false
  }
}, {
  tableName: "users",// nombre de la tabla en la base de datos
  timestamps: true,// agrega campos createdAt y updatedAt
});

export default User;
