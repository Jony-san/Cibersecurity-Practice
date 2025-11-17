//Importar framework
import express from 'express';
//Importar conexion a la base de datos
import conection from '../db/database.js';

const router = express.Router();

//ruta de ejemplo de una inyeccion sql
//POST http://localhost:3003/sql/inyection
router.post('/inyection', async (req, res) => {
    try{
        console.log("iniciando ejemplo de inyeccion sql");
        const userdata = req.body;
        console.log("data recibida", req.body);
    
        console.log("realizando consulta del usuario");
        const [usuario] = await conection.execute(`select * from usuario where nombre = '${userdata.username}'`);
        console.log("data encontrada", usuario);

    //if(usuario)

    res.json({ usuario });
    }catch(error){
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error en la consulta' });
    }

});

//ruta de ejemplo de una inyeccion sql
//POST http://localhost:3003/sql/inyection
router.post('/secure', async (req, res) => {
    try{
        console.log("iniciando ejemplo seguro de inyeccion sql");
        const userdata = req.body;
        console.log("data recibida", req.body);
    
        const [usuario] = await conection.execute(
            'SELECT * FROM usuario WHERE nombre = ?',
            [userdata.username]
          );
          console.log("data encontrada", usuario);

    //if(usuario)

    res.json({ usuario });
    }catch(error){
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error en la consulta' });
    }

});

export default router;