import axios from "axios"
import { config } from "../../../server/db"

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//Interceprion - Перехватчик
const authInterceprion = config => {
    //Получаем JWT из локального хранилища по ключу
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceprion)

export {
    $host, 
    $authHost
}