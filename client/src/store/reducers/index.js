import { combineReducers } from "@reduxjs/toolkit"
import { typeReducer } from "./typeReducer"
import { brandReducer } from "./brandReducer"
import { deviceReducer } from "./deviceReducer"
import { authReducer } from "./authReducer"

export const reducers = combineReducers({
    authReducer,
    typeReducer,
    brandReducer,
    deviceReducer,
})