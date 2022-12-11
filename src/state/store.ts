import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {loginReducer} from "../components/Login/bll/loginReducer";
import {registrationReducer} from "../components/Registration/bll/registrationReducer";
import {appReducer} from "../app/bll/appReducer";
import {profileReducer} from "../Profile/bll/profileReducer";
import {forgotPasswordReducer} from "../components/ForgotPassword/bll/forgotPasswordReducer";
import {packsReducer} from "../components/Table/bll/packsReducer";


const rootReducer = combineReducers({
    app: appReducer,
    forgotPassword: forgotPasswordReducer,
    login: loginReducer,
    registration: registrationReducer,
    packs: packsReducer,
    profile: profileReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppActionsType = any;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;



// export type AppRootStateType = ReturnType<typeof rootReducer>

//все типы actions для всего App
// export type AppActionsType = TodolistsActionType | TasksActionType | AppReducerActionsType

// @ts-ignore
window.store = store;