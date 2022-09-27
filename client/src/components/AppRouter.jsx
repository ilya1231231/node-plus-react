import React from "react"
import {Routes, Route, Redirect, useLocation, Navigate} from "react-router-dom"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE} from "../utils/consts"
import Basket from "../pages/Basket"
import Device from "../pages/Device"
import Auth from "../pages/Auth"
import Shop from "../pages/Shop"
import Admin from "../pages/Admin"
import About from "../pages/About"
import { useDispatch, useSelector } from "react-redux"
const AppRouter = () => {
    const dispatch = useDispatch()
	const isAuth = useSelector(state => state.authReducer.state)
    return(
        <Routes>
            <Route exact path={DEVICE_ROUTE + '/:id'} element={<Device/>}/>
            <Route exact path={REGISTRATION_ROUTE} element={<Auth/>}/>
            <Route exact path={SHOP_ROUTE} element={<Shop/>}/>
            <Route exact path={LOGIN_ROUTE} element={<Auth/>}/>
            <Route exact path={BASKET_ROUTE} element={<Basket/>}/>
            <Route exact path={ABOUT_ROUTE} element={<About/>}/>
            {isAuth ?? <Route exact path={ADMIN_ROUTE} element={<Admin/>}/> }
            <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
        </Routes>
    )
}

export default AppRouter;