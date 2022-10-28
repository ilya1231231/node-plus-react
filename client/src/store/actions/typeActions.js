import {SET_ERROR, SET_SELECTED_TYPE, SET_TYPES} from "./actionTypes";
import {createType, fetchTypes} from "../../http/deviceApi";
import actions from "./actions";

const setTypes = (dispatch, getState) => {
    try {
        fetchTypes().then((data) => {
            dispatch({
                type: SET_TYPES,
                payload: data
            })
        })
    } catch (e) {
        dispatch(actions.errorActions.setError(e))
    }
}

const saveType = (name) => {
    return async (dispatch, getState) => {
        try {
            await createType(name)
            fetchTypes().then((data) => {
                dispatch({
                    type: SET_TYPES,
                    payload: data
                })
            })
            dispatch(actions.successActions.setSuccess(true))
        } catch (e) {
            dispatch(actions.errorActions.setError(e))
        }
    }
}

const setSelectedType = (type) => {
    return {
        type: SET_SELECTED_TYPE,
        payload: type
    }
}

export default {
    setTypes,
    setSelectedType,
    saveType
}