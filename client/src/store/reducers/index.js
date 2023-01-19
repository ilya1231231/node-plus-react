import { combineReducers } from "@reduxjs/toolkit"
import { typeReducer } from "./typeReducer"
import { brandReducer } from "./brandReducer"
import { deviceReducer } from "./deviceReducer"
import { authReducer } from "./authReducer"
import {errorReducer} from "./errorReducer.ts";
import {successReducer} from "./successReducer";

export const reducers = combineReducers({
    authReducer,
    typeReducer,
    brandReducer,
    deviceReducer,
    errorReducer,
    successReducer
})