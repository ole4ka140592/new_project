import s from "../../../common/style/Form.module.css";
import k from "./ForgotPassword.module.css";
import {ChangeEvent, useState} from "react";
import {useAppDispatch} from "../../../hooks/hooks";
import {forgotPasswordTC} from "../forgotPasswordReducer";
import {NavLink} from "react-router-dom";


export const ForgotPassword = () => {
    const dispatch = useAppDispatch()
    let [input, setInput] = useState("")

    const onchangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    const sendYourPassword = () => {
        dispatch(forgotPasswordTC(ForgotPasswordForm))
    }

    const ForgotPasswordForm = {
        email: input,
        from: '<ole4ka140592@gmail.com>',
        message: `<div style="background-color: lime; padding: 15px">
password recovery link: <a href=https://github.com/ole4ka140592/new_project#/set-new-password/$token$'>link</a></div>`
    }

    return (
        <div className={s.form}>
            <div className={s.p3}>Forgot your Password?</div>
            <input className={s.input} onChange={onchangePassword} value={input}/>

            <div className={k.text}>Enter your email address and we will send you further instructions</div>

            <button onClick={sendYourPassword} className={s.button}>Send instructions</button>
            <NavLink to='/login' className={s.beforeBottomAttribute}>Did you remember your password?</NavLink>
            <NavLink to='/login' className={s.bottomAttribute}>Try logging in</NavLink>


        </div>
    )
}