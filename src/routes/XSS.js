//Importar framework
import express from 'express';
//Importar funcion para sanitizar datos
import { sanitize } from '../utils/data.js';

const router = express.Router();

//ruta de ejemplo de un ataque XSS
//POST http://localhost:3003/xss/ejemplo
router.post('/example', (req, res) => {
    //Extraer informacion
    const userdata = req.body;
    // Simulando una vulnerabilidad XSS al reflejar la entrada del usuario sin sanitizar
    const query = `<h1>Hello, ${userdata.comment}</h1>`;
    res.status(201).json({
        consult: query
    });
});

//ruta de ejemplo de un ataque XSS
//POST http://localhost:3003/xss/ejemplo
router.post('/secure', async (req, res) => {
    //Extraer informacion
    let userdata = req.body;
    //sanitizar datos
    userdata.comment =  await sanitize(userdata.comment);
    const query = `<h1>Hello, ${userdata.comment}</h1>`;
    res.status(201).json({
        consult: query
    });
});

export default router;