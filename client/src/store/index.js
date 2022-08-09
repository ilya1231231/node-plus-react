import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userReducer } from "./userReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
import { typeDeviceReducer } from "./typeDeviceReducer"

const rootReducer = combineReducers({
    userReducer: userReducer,
    typeDeviceReducer: typeDeviceReducer
})

//middleware позволяет внутри сторонних функций использовать dispatch
export const store = configureStore({reducer : rootReducer}, composeWithDevTools(applyMiddleware(thunk)))