import {Dispatch} from "redux";
import {forgotPasswordAPI} from "./forgotPasswordAPI";

const initialState = {
    isForgotPassword: false
}
type InitialStateType = typeof initialState

export const forgotPasswordReducer = (state: InitialStateType = initialState, action: ForgotPasswordActionsType): InitialStateType => {
    switch (action.type) {
        case 'forgotPassword/SET-FORGOT-PASSWORD':
            return {...state, isForgotPassword: action.value}
        default:
            return state
    }
}


// actions
export const setForgotPasswordAC = (value: boolean) =>
    ({type: 'forgotPassword/SET-FORGOT-PASSWORD', value} as const)


// thunks
export const forgotPasswordTC = (data: any) => (dispatch: Dispatch) => {
    forgotPasswordAPI.forgotPassword(data)
        .then((res) => {
            dispatch(setForgotPasswordAC(true))
        })
}


//types
export type SetForgotPasswordACType = ReturnType<typeof setForgotPasswordAC>
export type ForgotPasswordActionsType = SetForgotPasswordACType