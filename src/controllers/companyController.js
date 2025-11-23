import Company from "../models/Company.js";

export const createCompany = async (name) => {
  try {
    // Verificar si la empresa existe
    const repeatedCompany = await Company.findOne( {where: {id: companyId}});
    if (!repeatedCompany) {
      return res.status(404).json({ error: "Y existe una empresa con el nombre especificado" });
    }
    // Crear una nueva empresa en la base de datos
    const companydata = {
        name,
    }
    const company = await companies.create(companydata);
    return res.json(company);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getCompany = async (companyId) => {
    // Buscar una empresa por su ID
  const users = await Company.findOne( { where: { id: companyId } });
  res.json(users);
};