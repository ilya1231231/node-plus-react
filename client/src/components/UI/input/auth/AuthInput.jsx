import React from "react";
import classes from '../Input.module.css'
import { Button } from "react-bootstrap";
import { useSelector, useDispatch} from "react-redux";

const AuthInput = () => {
    const dispatch = useDispatch()
    const makeAuth = () => {
        dispatch({type: 'MAKE_AUTH', payload: true})
    }
    return(
        <div className={classes.inputGeneral}>
            <h3>Войти</h3>
            <input className={classes.authInput} placeholder="Введите логин"/>
            <input className={classes.authInput} placeholder="Введите пароль"/>
            <Button className="mt-3 w-50" variant={"outline-dark"} onClick={() => {makeAuth()}}>Войти</Button>
        </div>
    )
}

export default AuthInput;