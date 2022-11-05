import {SET_BRANDS, SET_SELECT_BRAND, SET_TYPES} from "./actionTypes";
import {createBrand, deleteBrand, fetchBrands, fetchTypes} from "../../http/deviceApi";
import actions from "./actions";

const setSelectedBrand = (brand) => {
    return {
        type: SET_SELECT_BRAND,
        payload: brand
    }
}

const setBrands = (dispatch, getState) => {
    try {
        fetchBrands().then((data) => {
            dispatch({
                type: SET_BRANDS,
                payload: data
            })
        })
    } catch (e) {
        dispatch(actions.errorActions.setError(e))
    }
}


const dropBrand = (brand) => {
    return async (dispatch, getState) => {
        try {
            await deleteBrand({brand})
            dispatch(actions.brandActions.setBrands)
            dispatch(actions.successActions.setSuccess(true, 'Успешно удалено'))
        } catch (e) {
            dispatch(actions.errorActions.setError(e))
        }
    }
}

const addBrand = (data) => {
    return async (dispatch, getState) => {
        try {
            await createBrand(data)
            dispatch(actions.brandActions.setBrands)
            dispatch(actions.successActions.setSuccess(true))
        } catch (e) {
            dispatch(actions.errorActions.setError(e))
        }
    }
}

export default {
    addBrand,
    dropBrand,
    setSelectedBrand,
    setBrands
}