import React from "react";
import classes from '../Input.module.css'

const AuthInput = () => {
    return(
        <div className={classes.inputGeneral}>
            <h3>Войти</h3>
            <input className={classes.authInput} placeholder="Введите логин"/>
            <input className={classes.authInput} placeholder="Введите пароль"/>
        </div>
    )
}

export default AuthInput;