import {SET_AUTH, SET_LOGOUT, SET_USER} from "../actions/actionTypes";

const defaultState = {
    isAuth: false,
    user: null
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: true}
        case SET_LOGOUT:
            return {...state, isAuth: false}
        case SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}