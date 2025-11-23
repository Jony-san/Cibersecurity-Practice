import express from 'express';
import { getUser, createUser } from '../controllers/userController.js';
const router = express.Router();

// Ruta para crear un usuario
// Post: /users/create
router.post('/create', async (req, res) => {
    try {
        // Tomar datos del cuerpo de la solicitud
        const { name, email, password, companyId } = req.body;
        // Llamar al controlador para crear el usuario
        const user = await createUser(name, email, password, companyId);
        res.status(201).json({
            message: "Usuario creado exitosamente",
            user
        });
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});


// Ruta para obtener un usuario
// Get: /users/:id
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        // Llamar al controlador para obtener el usuario
        const user = await getUser(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

export default router;