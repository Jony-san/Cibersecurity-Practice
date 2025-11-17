import mysql from "mysql2/promise";

const conection = mysql.createPool({
        host: "localhost",
        user: "jonyprueba",// database
        password: "prueba",// username
        database: "test",// password
    }
);

export default conection;