import s from "./Login.module.css";
import {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {loginTC} from "./loginReducer";
import {Navigate} from "react-router-dom";


export const Login = () => {
debugger

    const dispatch = useAppDispatch()

    const isLoggedIn = useAppSelector(state=> state.login.isLoggedIn)

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const loginForm = {
        email: inputEmail,
        password: inputPassword,
        rememberMe: rememberMe,
    }

    const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setInputEmail(e.currentTarget.value)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setInputPassword(e.currentTarget.value)
    }

    const onChangeCheckbox = ()=> {
        setRememberMe(!rememberMe)
    }
    const sendLoginForm =()=> {
        dispatch(loginTC(loginForm))
    }


    const onClickForgotPassword =()=> {
        return <Navigate to='/forgotPassword'/>
    }

    if (isLoggedIn) {
        return <Navigate to='/profile'/>
    }


    return (
            <div className={s.loginForm}>
                <input className={s.input} onChange={onChangeInputEmail} value={inputEmail}/>
                <p>email</p>
                <input className={s.input} type='password' value={inputPassword} onChange={onChangePassword}
                       />
                <p>password</p>
                <input type='checkbox' onChange={onChangeCheckbox}/>
                <button onClick={onClickForgotPassword}>Forgot Password</button>
                <button onClick={sendLoginForm}>Sign IN</button>
            </div>
    )
}