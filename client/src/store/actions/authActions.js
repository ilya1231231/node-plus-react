import {SET_AUTH, SET_LOGOUT, SET_USER} from "./actionTypes";

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

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload: data
    }
}

export default {
    setAuth,
    setLogout,
    setUser
}