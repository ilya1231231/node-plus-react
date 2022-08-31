import { combineReducers } from "@reduxjs/toolkit"
import { typeReducer } from "./typeReducer"
import { brandReducer } from "./brandReducer"
import { deviceReducer } from "./deviceReducer"
import { userReducer } from "./userReducer"


export const reducers = combineReducers({
    userReducer: userReducer,
    typeReducer: typeReducer,
    brandReducer: brandReducer,
    deviceReducer: deviceReducer,
})