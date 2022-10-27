import s from "../../../common/style/Form.module.css";
import k from "./Login.module.css";
import {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {loginTC} from "../loginReducer";
import {Navigate} from "react-router-dom";


export const Login = () => {
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
            <div className={s.form}>
                <div className={s.p3}>Sign In</div>

                <input className={s.input} onChange={onChangeInputEmail} value={inputEmail}/>
                <div className={s.textUnderInput}>email</div>

                <input className={s.input} type='password' value={inputPassword} onChange={onChangePassword}
                       />
                <div className={s.textUnderInput}>password</div>

                <div className={k.rememberMe}>
                    <input type='checkbox' onChange={onChangeCheckbox}/>
                    <span>Remember me</span>
                </div>

                <div onClick={onClickForgotPassword} className={k.forgotPassword}>Forgot Password</div>

                <button onClick={sendLoginForm} className={s.button}>Sign IN</button>

                <div className={s.beforeBottomAttribute}>Already have an account?</div>

                <div className={s.bottomAttribute}>Sign Up</div>
            </div>
    )
}