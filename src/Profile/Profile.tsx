import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {Navigate} from "react-router-dom";
import {useEffect} from "react";
import {authTC} from "../app/authReducer";

export const Profile = () => {
    const isLoggedIn = useAppSelector(state=> state.login.isLoggedIn)
    useEffect(()=>{
         if (!isLoggedIn) {
           return
        }
    }, [])

    const dispatch = useAppDispatch()



    if (!isLoggedIn) {
        return <Navigate to='/login'/>
    }
    return (


            <div>
               Profile
            </div>
    )
}