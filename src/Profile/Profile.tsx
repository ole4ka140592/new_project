import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {Navigate} from "react-router-dom";

export const Profile = () => {
    debugger

    const dispatch = useAppDispatch()

    const isLoggedIn = useAppSelector(state=> state.login.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to='/login'/>
    }
    return (


            <div>
               Profile
            </div>
    )
}