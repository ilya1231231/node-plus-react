import { combineReducers } from "@reduxjs/toolkit"
import { typeReducer } from "./typeReducer"
import { brandReducer } from "./brandReducer"
import { deviceReducer } from "./deviceReducer"
import { authReducer } from "./authReducer"
import { userReducer } from "./userReducer"


export const reducers = combineReducers({
    authReducer,
    typeReducer,
    brandReducer,
    deviceReducer,
    userReducer,
})