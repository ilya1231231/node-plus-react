import {SET_ERROR} from "../actions/actionTypes";
import {SetErrorType} from "../actions/errorActions";

export type ErrorType = {
    error: null
}

const defaultState: ErrorType = {
    error : null,
}

export const errorReducer = (state = defaultState, action: SetErrorType) => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error : action.payload}
        default:
            return state
    }
}