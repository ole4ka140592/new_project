import s from "../components/Login/Login.module.css";
import {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {loginTC} from "../components/Login/loginReducer";
import {registrationTC} from "./forgotPasswordReducer";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


export const ForgotPassword = () => {

    let [input, setInput] = useState("")

    const onchangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    return (
            <div className={s.loginForm}>
                <p>Forgot your Password?</p>

                <input className={s.input} type='password' onChange={onchangePassword} value={input}/>
                <p>Enter your email address and we will send you further instructions</p>
                <button>Send instructions</button>
                <p>Did you remember your password?</p>
                <a>Try logging in</a>


            </div>
    )
}