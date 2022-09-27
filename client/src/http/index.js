import axios from "axios"

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/'
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/'
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