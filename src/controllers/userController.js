import User from "../models/User.js";
import companies from "../models/Company.js";

export const createUser = async (name, email, password, companyId) => {
  try {
    // Verificar si la empresa existe
    const company = await companies.findByPk(companyId);
    if (!company) {
      return { message: "No se encontro la empresa deseada" };
    }
    // Verificar si el correo electrónico ya está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return { message: "Se encontro un registro previo del correo electronico especificado" };
    }
    // Crear un nuevo usuario en la base de datos
    const userdata = {
        name,
        email,
        password,
        companyId
    }
    const user = await User.create(userdata);
    return {
      message: "Usuario creado exitosamente",
      user
    };
  } catch (err) {
    console.log(err);
    return { message: err.message };
  }
};

export const getUser = async (userId) => {
    try {
      // Buscar un usuario por su ID
      const users = await User.findOne( { where: { id: userId } });
      return {
        message: "Usuario encontrado exitosamente",
        users
      };
    } catch (error) {
      // Manejo de errores
      return { message: error.message };
    }
};