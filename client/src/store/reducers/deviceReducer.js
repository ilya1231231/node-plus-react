import {SET_SELECT_DEVICE, SET_DEVICES} from "../actions/actionTypes";

const defaultState = {
    devices : [],
    selectedDevice: {}
}

export const deviceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECT_DEVICE:
            return {...state, selectedDevice : action.payload}
        case SET_DEVICES:
            return {...state, devices : action.payload}
        default:
            return state
    }
}