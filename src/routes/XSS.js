//Importar framework
import express from 'express';
//Importar conexion a la base de datos
import conection from '../db/database.js';

const router = express.Router();

//ruta de ejemplo de un ataque XSS
//POST http://localhost:3003/xss/ejemplo
router.post('/ejemplo', (req, res) => {
    const userdata = req.body;
    // Simulando una vulnerabilidad XSS al reflejar la entrada del usuario sin sanitizar
    const query = `<h1>Hello, ${userdata.comment}</h1>`;
    res.send(query);
});

export default router;