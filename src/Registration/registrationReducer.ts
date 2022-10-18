import {Dispatch} from "redux";
import {registrationAPI} from "./registrationAPI";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const registrationReducer = (state: InitialStateType = initialState, action: LoginActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}


// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)


// thunks
export const loginTC = (data: any) => (dispatch: Dispatch) => {
    registrationAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
        })
}


//types
export type SetIsLoggedInType = ReturnType<typeof setIsLoggedInAC>
export type LoginActionsType = SetIsLoggedInType