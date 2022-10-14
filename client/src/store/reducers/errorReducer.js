import {SET_ERROR} from "../actions/actionTypes";

const defaultState = {
    error : null,
}

export const errorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error : action.payload}
        default:
            return state
    }
}