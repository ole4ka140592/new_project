import s from "../../../common/style/Form.module.css";
import k from "./ForgotPassword.module.css";
import {ChangeEvent, useState} from "react";
import {useAppDispatch} from "../../../hooks/hooks";
import {forgotPasswordTC} from "../forgotPasswordReducer";


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
        from: "test-front-admin <ai73a@yandex.by>",
        // message: ""
    }
    return (
        <div className={s.form}>
            <div className={s.p3}>Forgot your Password?</div>
            <input className={s.input} onChange={onchangePassword} value={input}/>

            <div className={k.text}>Enter your email address and we will send you further instructions</div>

            <button onClick={sendYourPassword} className={s.button}>Send instructions</button>
            <div className={s.beforeBottomAttribute}>Did you remember your password?</div>
            <div className={s.bottomAttribute}>Try logging in</div>


        </div>
    )
}