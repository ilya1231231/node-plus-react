import {SET_ERROR} from "./actionTypes";

const setError = (data) => {
    return {
        type: SET_ERROR,
        payload: data
    }
}

export default {
    setError,
}