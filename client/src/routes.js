import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import Device from "./pages/Device"

import { 
    ADMIN_ROUTE, 
    BASKET_ROUTE, 
    DEVICE_ROUTE, 
    LOGIN_ROUTE, 
    REGISTRATION_ROUTE, 
    SHOP_ROUTE
 } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        component: <Basket/>,
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth/>
    },    {
        path: SHOP_ROUTE,
        component: <Shop/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        component: <Device/>
    },
]