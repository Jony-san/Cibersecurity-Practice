import jwt from 'jwt' // Asegúrate de tener el paquete jsonwebtoken instalado

export const createJWT = async (name, company, credential) =>{
    const payload = {
        name: name,
        company: company,
        credential: credential
    };

    const secretKey = 'your_secret_key'; // Cambia esto por una clave secreta segura
    const options = { expiresIn: '1h' }; // Opcional: tiempo de expiración

    return jwt.sign(payload, secretKey, options);
}