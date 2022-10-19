import {Navigate, Route} from "react-router-dom";
import {Login} from "../Login/Login";
import {Registration} from "../Registration/Registration";
import React from "react";
import {Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";


export const RoutesAll = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>

        </div>
    )
}