import jwt from 'jsonwebtoken' // Asegúrate de tener el paquete jsonwebtoken instalado


export const createJWT = async (name, company) =>{
    //Crear objeto que contendra el jwt
    const payload = {
        name: name,
        company: company,
    };
    
    //Definir secreto
    const secretKey = 'example_key'; // Cambia esto por una clave secreta segura
    //definir tiempo de expiracion
    const options = { expiresIn: '1h' }; // Opcional: tiempo de expiración
    
    //Crear y devolver JWT
    return jwt.sign(payload, secretKey);
}

export const AuthenticateJWT = async (token) =>{
    try{
        //Validar token
        return jwt.verify(token, "example_key")
    }catch(error){
        throw new Error("Invalid Token");
    }
}

export const Authenticate= async (req , res , next) =>{
    try{
        //Obtener token de autenticación
        const token = req.headers.authorization;
        if(!token){
            res.status(400).json({
                message: "Peticion invalida"
            });
        }
        console.log("Token recibido:", token);
        //Validar token
        const validate = jwt.verify(token, "example_key")
        if(!validate){
            res.status(401).json({
                message: "Token Invalido"
            });
        }
        next();
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error en la autenticacion"
        });
    }
}