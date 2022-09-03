import React from "react";
import classes from '../Input.module.css'
import { Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../../../../utils/consts";
import { registration, login } from "../../../../http/userApi";

const AuthInput = () => {
    const dispatch = useDispatch()
    const makeAuth = () => {
        dispatch({type: 'MAKE_AUTH', payload: true})
    }
    //useLoaction() - содержит данные о странице (URL)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const loginOrRegister = async () => {
        const response = isLogin ? await login() : await registration()
        console.log(response)
    }
    return(
        <div className={classes.inputGeneral}>
            <h3>{isLogin ? "Авторизация" : "Регистрация"}</h3>
            <input className={classes.authInput} placeholder="Введите логин"/>
            <input className={classes.authInput} placeholder="Введите пароль"/>  
                {isLogin
                    ? 
                    <div className="w-100">
                        У вас нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегиструйтесь!</Link>
                    </div>
                    : 
                    <div className="w-100">
                        У вас уже есть аккаунт? <Link to={LOGIN_ROUTE}>Войти!</Link>
                    </div>}
            <Button className="mt-3 w-50" variant={"outline-dark"} onClick={() => {makeAuth()}}>Войти</Button>
        </div>
    )
}

export default AuthInput;