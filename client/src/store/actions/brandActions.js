import {SET_BRANDS, SET_SELECT_BRAND} from "./actionTypes";

const setSelectedBrand = (brand) => {
    return {
        type: SET_SELECT_BRAND,
        payload: brand
    }
}

const setBrands = (data) => {
    return {
        type: SET_BRANDS,
        payload: data
    }
}

export default {
    setSelectedBrand,
    setBrands
}