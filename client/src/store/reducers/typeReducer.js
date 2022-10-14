import {SET_SELECTED_TYPE, SET_TYPES} from "../actions/actionTypes";

const defaultState = {
    types : [],
    selectedType : {}
}

export const typeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECTED_TYPE:
            return {...state, selectedType : action.payload}
        case SET_TYPES:
            return {...state, types : action.payload}
        default:
            return state
    }
}