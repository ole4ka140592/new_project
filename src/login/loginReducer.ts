import {Dispatch} from "redux";
import {loginAPI} from "./loginAPI";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: LoginActionsType): InitialStateType => {
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
    loginAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
        })
}


//types
export type SetIsLoggedInType = ReturnType<typeof setIsLoggedInAC>
export type LoginActionsType = SetIsLoggedInType