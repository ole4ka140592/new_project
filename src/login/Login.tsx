import s from "./Login.module.css";
import {ChangeEvent, useState} from "react";
import {useAppDispatch} from "../hooks/hooks";
import {loginTC} from "./loginReducer";


export const Login = () => {
    const dispatch = useAppDispatch()

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


    return (
            <div className={s.loginForm}>
                <input className={s.input} onChange={onChangeInputEmail} value={inputEmail}/>
                <p>email</p>
                <input className={s.input} type='password' value={inputPassword} onChange={onChangePassword}
                       />
                <p>password</p>
                <input type='checkbox' onChange={onChangeCheckbox}/>
                <button onClick={sendLoginForm}>Sign IN</button>
            </div>
    )
}