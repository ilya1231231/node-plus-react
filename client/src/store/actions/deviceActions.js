import {SET_DEVICES, SET_SELECT_DEVICE} from "./actionTypes";

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

export default {
    setSelectedDevice,
    setDevices
}