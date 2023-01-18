import {configureStore} from "@reduxjs/toolkit"
import {reducers} from "./reducers"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {applyMiddleware} from "redux"


//middleware позволяет внутри сторонних функций использовать dispatch
export const store = configureStore({reducer: reducers}, composeWithDevTools(applyMiddleware(thunk)))