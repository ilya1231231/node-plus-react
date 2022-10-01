import {SET_USER} from "../actions/actionTypes";

const defaultState = {
    user: null
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}