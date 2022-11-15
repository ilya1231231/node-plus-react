import {SET_SUCCESS} from "../actions/actionTypes";

const defaultState = {
    success: false,
    message: ''
}

export const successReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
                message: action.payload.message
            }
        default:
            return state
    }
}