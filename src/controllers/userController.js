import User from "../models/User.js";
import companies from "../models/Company.js";

export const createUser = async (name, email, password, companyId) => {
  try {
    // Verificar si la empesa existe
    const company = await companies.findByPk(companyId);
    if (!company) {
      return res.status(404).json({ error: "No se encontro la empresa deseada" });
    }
    // Verificar si el correo electrónico ya está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Se encontro un registro previo del correo electronico especificado" });
    }
    // Crear un nuevo usuario en la base de datos
    const userdata = {
        name,
        email,
        password,
        company
    }
    const user = await User.create(userdata);
    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getUser = async (userId) => {
    // Buscar un usuario por su ID
  const users = await User.findOne( { where: { id: userId } });
  res.json(users);
};