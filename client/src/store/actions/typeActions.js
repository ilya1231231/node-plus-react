import {fetchTypes} from "../../http/deviceApi";
import {SET_TYPES} from "./actionTypes";

export const getTypes = (dispatch) => {
    fetchTypes().then(data => dispatch({type: SET_TYPES, payload: data}))
}