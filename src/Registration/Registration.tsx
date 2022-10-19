import s from "../Login/Login.module.css";
import {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {loginTC} from "../Login/loginReducer";
import {registrationTC} from "./registrationReducer";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


export const Registration = () => {
    const dispatch = useAppDispatch()

    const isRegistrationIn = useAppSelector(state=> state.registration.isRegistrationIn)



    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputConfirmPassword, setInputConfirmPassword] = useState("")

    const registrationForm = {
        email: inputEmail,
        password: inputPassword,
        // confirmPassword: inputConfirmPassword
    }

    const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setInputEmail(e.currentTarget.value)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setInputPassword(e.currentTarget.value)
    }

    const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setInputConfirmPassword(e.currentTarget.value)
    }

    const sendRegistrationForm =()=> {
        console.log(registrationForm)
        dispatch(registrationTC(registrationForm))
    }

    if (isRegistrationIn) {
        return <Navigate to='/login'/>
    }


    return (
            <div className={s.loginForm}>
                <input className={s.input} onChange={onChangeInputEmail} value={inputEmail}/>
                <p>email</p>

                <input className={s.input} type='password' value={inputPassword} onChange={onChangePassword}
                       />
                <p>password</p>

                <input className={s.input} type='password' value={inputConfirmPassword} onChange={onChangeConfirmPassword}/>
                <p>confirm password</p>

                <button onClick={sendRegistrationForm}>Sign UP</button>
            </div>
    )
}