import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Navigate} from "react-router-dom";
import {useEffect} from "react";
import {authTC} from "../../app/bll/appReducer";
import {Table} from "../../components/Table/ui/Table";
import {setCardsTC} from "../bll/profileReducer";

export const Profile = () => {
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
    }, [])

    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(setCardsTC())
    }, [])


    if (!isLoggedIn) {
        return <Navigate to='/login'/>
    }
    return (
        <div>
            <Table/>
        </div>
    )
}