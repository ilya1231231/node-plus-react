import {$authHost, $host} from ".";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const deleteType = async (type) => {
    try {
        const {data} = await $authHost.post('api/type/delete', type)
        return data
    } catch (error) {
        throw error
    }
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    try {
        const {data} = await $authHost.post('api/brand', brand)
        return data
    } catch (error) {
        throw error
    }
}

export const deleteBrand = async (brand) => {
    try {
        const {data} = await $authHost.post('api/brand/delete', brand)
        return data
    } catch (error) {
        throw error
    }
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

