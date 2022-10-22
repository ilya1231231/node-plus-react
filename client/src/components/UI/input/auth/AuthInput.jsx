import React from "react";
import classes from '../Input.module.css'
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../../../utils/consts";
import {registration, login} from "../../../../http/userApi";
import {useState} from "react";
import actions from "../../../../store/actions/actions";
import {errorHandler} from "../../../../helpers/apiErrorHelper";

const AuthInput = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const makeAuth = () => {
        dispatch(actions.authActions.setAuth())
    }

    const setUser = (user) => {
        dispatch(actions.authActions.setUser(user))
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //useLoaction() - содержит данные о странице (URL)
    const location = useLocation()
    const isLoginPage = location.pathname === LOGIN_ROUTE

    const loginOrRegister = async () => {
        try {
            let user;
            if (isLoginPage) {
                //распаршеный и декодированный объект юзера из jwt
                user = await login(email, password)
            } else {
                user = await registration(email, password)
            }
            setUser(user)
            makeAuth()
            navigate(SHOP_ROUTE)
        } catch (error) {
            errorHandler(error, dispatch)
        }
    }
    return (
        <div className={classes.inputGeneral}>
            <h3>{isLoginPage ? "Авторизация" : "Регистрация"}</h3>
            <form>
                <input
                    className={classes.authInput}
                    placeholder="Введите логин..."
                    autoComplete="current-username"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <input
                    className={classes.authInput}
                    autoComplete="current-password"
                    placeholder="Введите пароль..."
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
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
                    className="mt-3 w-100"
                    variant={"outline-dark"}
                    onClick={() => {
                        loginOrRegister(email, password)
                    }}
                >
                    {isLoginPage ? 'Войти' : 'Регистрация'}
                </Button>
            </form>
        </div>
    )
}

export default AuthInput;