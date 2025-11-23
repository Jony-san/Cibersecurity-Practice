import Company from "../models/Company.js";

export const createCompany = async (name) => {
  try {
    // Verificar si la empresa existe
    const repeatedCompany = await Company.findOne( {where: {name}});
    if (repeatedCompany) {
      return { message: "Ya existe una empresa con el nombre especificado" };
    }
    // Crear una nueva empresa en la base de datos
    const companydata = {
        name,
    }
    const company = await Company.create(companydata);
    return {
      message: "Empresa creada exitosamente",
      company
    };
  } catch (err) {
    console.log("detonando error: ", err);
    return { message: err.message };
  }
};

export const getCompany = async (companyId) => {
    try{
      // Buscar una empresa por su ID
      const users = await Company.findOne( { where: { id: companyId } });
      return {
        message: "Empresa obtenida exitosamente",
        users
      };
    }catch(error){
      console.log("detonando error: ", error);
      return { message: error.message };
    }
};