import {Navigate, Route} from "react-router-dom";
import {Login} from "../components/Login/ui/Login";
import {Registration} from "../components/Registration/ui/Registration";
import React from "react";
import {Routes} from "react-router-dom";
import {Profile} from "../Profile/ui/Profile";
import {ForgotPassword} from "../components/ForgotPassword/ui/ForgotPassword";


export const RoutesAll = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/profile"/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </div>
    )
}