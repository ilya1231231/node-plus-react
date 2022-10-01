import {SET_SELECT_TYPE, SET_TYPES} from "./actionTypes";

const setTypes = (data) => {
    return {
        type: SET_TYPES,
        payload: data
    }
}

const setSelectedType = (type) => {
    return {
        type: SET_SELECT_TYPE,
        payload: type
    }
}

export default {
    setTypes,
    setSelectedType
}