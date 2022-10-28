import {SET_ERROR} from "./actionTypes";

const setError = (error) => {
    return {
        type: SET_ERROR,
        payload: error ? (error.response.data.message ?? 'Ошибка. Обратитесь в разработчику приложения') : null
    }
}

export default {
    setError,
}