import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {loginOut} from "../components/Login/loginReducer";
import s from "./NavigateList.module.css";

export const NavigateList = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const logout = () => {
        dispatch(loginOut())
    }

    return (
        <div className={s.navLinks}>
            <NavLink to='/registration' className={s.navLink}>Registration</NavLink>
            {isLoggedIn
                ? <NavLink to='/login' onClick={logout} className={s.navLink}>Logout</NavLink>
                : <NavLink to='/login' className={s.navLink}>Login</NavLink>
            }
            <NavLink to='/' className={s.navLink}>Profile</NavLink>
            <NavLink to='/forgotPassword' className={s.navLink}>Forgot Password</NavLink>
        </div>
    )

}