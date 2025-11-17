import validator from 'validator';

export const sanitize = async (data) => {
    //sanitizar informacion
    return validator.escape(data);
}