import express from 'express';
import { getCompany, createCompany } from '../controllers/companyController.js';
const router = express.Router();

// Ruta para crear una empresa
// Post: /company/create
router.post('/create', async (req, res) => {
    try {
        // Tomar datos del cuerpo de la solicitud
        const { name } = req.body;
        // Llamar al controlador para crear la empresa
        const company = await createCompany(name);
        res.status(201).json({
            message: company.message,
            company
        });
    } catch (error) {
        console.log(error);
        // Manejo de errores
        res.status(500).json({ error: 'Error al crear la empresa' });
    }
});


// Ruta para obtener una empresa
// Get: /company/:id
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        // Llamar al controlador para obtener la empresa
        const user = await getCompany(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'Empresa no encontrado' });
        }
    } catch (error) {
        console.log(error);
        // Manejo de errores
        res.status(500).json({ error: 'Error al obtener la empresa' });
    }
});

export default router;