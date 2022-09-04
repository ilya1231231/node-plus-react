import React from "react";
import classes from '../Input.module.css'
import { Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../../../../utils/consts";
import { registration, login } from "../../../../http/userApi";
import { useState } from "react";

const AuthInput = () => {
    const dispatch = useDispatch()
    const makeAuth = () => {
        dispatch({type: 'MAKE_AUTH', payload: true})
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //useLoaction() - содержит данные о странице (URL)
    const location = useLocation()
    const isLoginPage = location.pathname === LOGIN_ROUTE

    const loginOrRegister = async () => {
        let user;
        if (isLoginPage) {
            user = await login(email, password)
        } else {
            user = await registration(email, password)
        }
        makeAuth()
    }
    return(
        <div className={classes.inputGeneral}>
            <h3>{isLoginPage ? "Авторизация" : "Регистрация"}</h3>
            <form>
                <input 
                    className={classes.authInput} 
                    placeholder="Введите логин..."
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                <input 
                    className={classes.authInput}
                    placeholder="Введите пароль..."
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="password"
                    />  
                    {isLoginPage
                        ? 
                        <div className="w-100">
                            У вас нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегиструйтесь!</Link>
                        </div>
                        : 
                        <div className="w-100">
                            У вас уже есть аккаунт? <Link to={LOGIN_ROUTE}>Войти!</Link>
                        </div>}
                <Button 
                    className="mt-3 w-50" 
                    variant={"outline-dark"} 
                    onClick={() => {loginOrRegister(email, password)}}
                    >
                        {isLoginPage ? 'Войти' : 'Регистрация'}
                    </Button>
            </form>
        </div>
    )
}

export default AuthInput;