import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
    const {data} = await $authHost.post('api/user/registration', {email, password, role: 'ADMIN'})
    //Декодим и парсим JWT
    return jwt_decode(data.jwtToken);
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    return jwt_decode(data.jwtToken);
}

export const check = async () => {
    const response = await $host.post('api/user/registration', {})
    return response;
}