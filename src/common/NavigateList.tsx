import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {loginOut} from "../components/Login/loginReducer";


export const NavigateList = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const logout = () => {
        dispatch(loginOut())
    }

    return (
        <div>
            <NavLink to='/registration'>Registration</NavLink>
            {isLoggedIn
                ? <NavLink to='/login' onClick={logout}>Logout</NavLink>
                : <NavLink to='/login'>Login</NavLink>
            }

            <NavLink to='/'>Profile</NavLink>
            <NavLink to='/forgotPassword'>Forgot Password</NavLink>
        </div>
    )

}