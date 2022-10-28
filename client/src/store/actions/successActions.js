import {SET_SUCCESS} from "./actionTypes";

const setSuccess = (status, message) => {
    return {
        type: SET_SUCCESS,
        payload: {success: status, message: message ?? 'Успешно сохранено'}
    }
}

export default {
    setSuccess,
}