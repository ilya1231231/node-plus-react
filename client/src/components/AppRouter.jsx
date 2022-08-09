import React from "react"
import {Routes, Route, Redirect} from "react-router-dom"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, LOGIN_ROUTE} from "../utils/consts"
import Basket from "../pages/Basket"
import Device from "../pages/Device"
import Auth from "../pages/Auth"
import Shop from "../pages/Shop"
import Admin from "../pages/Admin"

const AppRouter = () => {
    const isAuth = false
    return(
        <Routes>
            <Route exact path={DEVICE_ROUTE} element={<Device/>}/>
            <Route exact path={REGISTRATION_ROUTE} element={<Auth/>}/>
            <Route exact path={SHOP_ROUTE} element={<Shop/>}/>
            <Route exact path={LOGIN_ROUTE} element={<Auth/>}/>
            <Route exact path={BASKET_ROUTE} element={<Basket/>}/>
            <Route exact path={ADMIN_ROUTE} element={<Admin/>}/>
        </Routes>
    )
}

export default AppRouter;