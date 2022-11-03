import {SET_DEVICES, SET_SELECT_DEVICE, SET_TYPES} from "./actionTypes";
import {createDevice, createType, fetchTypes} from "../../http/deviceApi";
import actions from "./actions";

const setSelectedDevice = (device) => {
    return {
        type: SET_SELECT_DEVICE,
        payload: device
    }
}

const setDevices = (data) => {
    return {
        type: SET_DEVICES,
        payload: data
    }
}

const create = (data) => {
    return async (dispatch, getState) => {
        try {
            await createDevice(data)
            dispatch(actions.typeActions.setTypes)
            dispatch(actions.successActions.setSuccess(true))
        } catch (e) {
            dispatch(actions.errorActions.setError(e))
        }
    }
}


export default {
    setSelectedDevice,
    setDevices,
    create
}