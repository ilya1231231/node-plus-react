import {SET_AUTH, SET_LOGOUT} from "../actions/actionTypes";

const defaultState = {
    isAuth: false
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth : true}
        case SET_LOGOUT: {
            return {...state, isAuth : false}
        }
        default:
            return state
    }
}