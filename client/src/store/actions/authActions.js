import {SET_AUTH, SET_LOGOUT} from "./actionTypes";

export const setAuth = () => {
    return {
        type: SET_AUTH,
        payload: true
    }
}

export const setLogout = () => {
    return {
        type: SET_LOGOUT,
        payload: false
    }
}

export default {
    setAuth,
    setLogout
}