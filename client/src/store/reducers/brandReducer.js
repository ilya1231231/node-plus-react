import {SET_SELECT_BRAND, SET_BRANDS} from "../actions/actionTypes";

const defaultState = {
    brands : [],
    selectedBrand: {}
}

export const brandReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECT_BRAND:
            return {...state, selectedBrand : action.payload}
        case SET_BRANDS:
            return {...state, brands : action.payload}
        default:
            return state
    }
}