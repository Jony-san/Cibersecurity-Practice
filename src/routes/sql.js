//Importar framework
import express from 'express';
//Importar modelo usuarios
import User from '../models/User.js';
import { Authenticate } from '../utils/Authenticate.js';

const router = express.Router();

//ruta de ejemplo de una inyeccion sql
//POST http://localhost:3003/sql/inyection
router.post('/inyection', /* Authenticate, */  async (req, res) => {
    try{
        //Extraer informacion
        const userdata = req.body;
        console.log("data recibida", req.body);
        /* 
        //Consultar datos concatenando (vulnerable a inyeccion sql)
        const [usuario] = await conection.execute(
            `select * from usuario where nombre = '${userdata.username}'`
            );
        */
        //Consultar datos con ORM
        const usuario = await User.findAll({
            where: {
                name: userdata.username
            }
        });
        //Devolver informacion encontrada
        res.status(201).json({ 
            usuario
    });
    }catch(error){
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error en la consulta' });
    }

});

//ruta de ejemplo de una inyeccion sql
//POST http://localhost:3003/sql/inyection
router.post('/secure', /* Authenticate, */  async (req, res) => {
    try{
        //Extraer informacion
        const userdata = req.body;
        console.log("data recibida", req.body);
        /* 
        //Consultar datos usando indicadores de posicion (placeholders)
        const [usuario] = await conection.execute(
            'SELECT * FROM usuario WHERE nombre = ?',
            [userdata.username]
          ); */
          //Consultar datos con ORM
        const usuario = await User.findAll({
            where: {
                name: userdata.username
            }
        });
        //Devolver informacion encontrada
        res.status(201).json({ 
            usuario
        });
    }catch(error){
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error en la consulta' });
    }

});

export default router;