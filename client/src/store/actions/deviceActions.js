import {SET_BRANDS, SET_DEVICES, SET_SELECT_DEVICE, SET_TYPES} from "./actionTypes";
import {createDevice, fetchDevices} from "../../http/deviceApi";
import actions from "./actions";

const setSelectedDevice = (device) => {
    return {
        type: SET_SELECT_DEVICE,
        payload: device
    }
}

const setDevices = (dispatch, getState) => {
    try {
        fetchDevices().then((data) => {
            dispatch({
                type: SET_DEVICES,
                payload: data
            })
        })
    } catch (e) {
        dispatch(actions.errorActions.setError(e))
    }
}

const create = (data) => {
    return async (dispatch, getState) => {
        try {
            await createDevice(data)
            dispatch(actions.typeActions.setTypes)
            dispatch(actions.brandActions.setBrands)
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