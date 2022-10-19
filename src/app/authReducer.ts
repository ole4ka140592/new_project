import {Dispatch} from "redux";
import {authAPI} from "./authAPI";
import {setIsLoggedInAC} from "../Login/loginReducer";
import {loginAPI} from "../Login/loginAPI";

const initialState = {
    isInitializedIn: false
}
type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: InitializedActionsType): InitialStateType => {
    switch (action.type) {
        case 'app/SET-IS-INITIALIZED-IN':
            return {...state, isInitializedIn: action.value}
        default:
            return state
    }
}


// actions
export const setIsInitializedInAC = (value: boolean) =>
    ({type: 'app/SET-IS-INITIALIZED-IN', value} as const)


// thunks
export const authTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setIsInitializedInAC(true))
        })
}




//types
export type SetIsInitializedInType = ReturnType<typeof setIsInitializedInAC>
export type InitializedActionsType = SetIsInitializedInType