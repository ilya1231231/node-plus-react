import { $authHost, $host } from ".";

export const registration = async (email, password) => {
    const response = await $host.post('api/auth/registration', {email, password, role: 'ADMIN'})
}

export const login = async (email, password) => {
    const response = await $host.post('api/auth/registration', {email, password})
}

export const check = async () => {
    const response = await $host.post('api/auth/registration', {email, password, role: 'ADMIN'})
}