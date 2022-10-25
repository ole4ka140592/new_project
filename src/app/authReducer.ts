import {Dispatch} from "redux";
import {authAPI} from "./authAPI";
import {setIsLoggedInAC} from "../components/Login/loginReducer";
import {loginAPI} from "../components/Login/loginAPI";

const initialState = {
    isInitializedIn: false,
    status: 'loading' as RequestStatusType,
}
type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: InitializedActionsType): InitialStateType => {
    switch (action.type) {
        case 'app/SET-IS-INITIALIZED-IN':
            return {...state, isInitializedIn: action.value}


        case 'app/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}


// actions
export const setIsInitializedInAC = (value: boolean) =>
    ({type: 'app/SET-IS-INITIALIZED-IN', value} as const)

export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: "app/SET-STATUS",
        status
    } as const
}

// thunks
export const authTC = () => (dispatch: Dispatch) => {
    // dispatch(setAppStatusAC("loading"))
    authAPI.me()
        .then((res) => {
            // dispatch(setAppStatusAC("succeeded"))
            dispatch(setIsLoggedInAC(true))
            dispatch(setIsInitializedInAC(true))
        })
        .catch()
        .finally(() => {
                dispatch(setIsInitializedInAC(true))
            }
        )
}


//types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type SetIsInitializedInType = ReturnType<typeof setIsInitializedInAC>
export type SetAppStatusType = ReturnType<typeof setAppStatusAC>
export type InitializedActionsType = SetIsInitializedInType | SetAppStatusType