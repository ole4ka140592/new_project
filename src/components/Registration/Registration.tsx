import s from "../../common/style/Form.module.css";
import {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
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
            <div className={s.form}>
                <div className={s.p3}>Sign Up</div>

                <input className={s.input} onChange={onChangeInputEmail} value={inputEmail}/>
                <div className={s.textUnderInput}>Email</div>

                <input className={s.input} type='password' value={inputPassword} onChange={onChangePassword}
                       />
                <div className={s.textUnderInput}>Password</div>

                <input className={s.input} type='password' value={inputConfirmPassword} onChange={onChangeConfirmPassword}/>
                <div className={s.textUnderInput}>Confirm password</div>

                <button onClick={sendRegistrationForm} className={s.button}>Sign UP</button>
                <div className={s.beforeBottomAttribute}>Already have an account?</div>

                <div className={s.bottomAttribute}>Sign Up</div>
            </div>
    )
}