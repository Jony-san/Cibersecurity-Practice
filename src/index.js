//Importar framework
import express from 'express';
//Importar conexion a la base de datos
import conection from './db/database.js';
//Importar CORS
import cors from 'cors';
//Importar rutas
import SQL from "./routes/sql.js";
import XSS from "./routes/XSS.js";

//Crear una app de express
const app = express();

//crear objeto cors
const corsOptions = {
	origin: ["http://localhost:3000", "http://postman.com"], // Indica el dominio permitido para solicitar recursos
	methods: ['GET', 'PUT', 'POST', 'DELETE'], // Métodos HTTP permitidos
	allowedHeaders: ['Content-Type', 'Authorization', 'user-agent'], // Cabeceras permitidas
	credentials: true // Permite enviar cookies en las solicitudes
};
//Usar CORS
app.use(cors(corsOptions));
//Usar JSON al recibir datos
app.use(express.json());

//Usar rutas
app.use('/sql', SQL);
app.use('/xss', XSS);


app.get('/', (req, res) => {
  res.send('app conectada exitosamente');
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto:', PORT);
})