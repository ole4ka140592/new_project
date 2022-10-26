import {Dispatch} from "redux";
import {forgotPasswordAPI} from "./forgotPasswordAPI";

const initialState = {
    isRegistrationIn: false
}
type InitialStateType = typeof initialState

export const forgotPasswordReducer = (state: InitialStateType = initialState, action: RegistrationActionsType): InitialStateType => {
    switch (action.type) {
        case 'registration/SET-IS-REGISTRATION-IN':
            return {...state, isRegistrationIn: action.value}
        default:
            return state
    }
}


// actions
export const setIsisRegistrationInInAC = (value: boolean) =>
    ({type: 'registration/SET-IS-REGISTRATION-IN', value} as const)


// thunks
export const registrationTC = (data: any) => (dispatch: Dispatch) => {
    forgotPasswordAPI.login(data)
        .then((res) => {
            dispatch(setIsisRegistrationInInAC(true))
        })
}


//types
export type SetIsRegistrationInType = ReturnType<typeof setIsisRegistrationInInAC>
export type RegistrationActionsType = SetIsRegistrationInType