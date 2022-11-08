import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {loginReducer} from "../components/Login/loginReducer";
import {registrationReducer} from "../components/Registration/registrationReducer";
import {appReducer} from "../app/authReducer";
import {profileReducer} from "../Profile/profileReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    app: appReducer,
    profile: profileReducer
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