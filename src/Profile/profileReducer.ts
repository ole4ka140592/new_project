import {profileAPI} from "./profileAPI";
import {Dispatch} from "redux";


const initialState = {
    value: false
}
type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case 'profile/SET-CARDS':
            return {...state, value: action.value}
        default:
            return state
    }
}


// actions
export const setCardsAC = (value: any) =>
    ({type: 'profile/SET-CARDS', value} as const)


// thunks
export const setCardsTC = () => (dispatch: Dispatch) => {
    // dispatch(setAppStatusAC("loading"))
    profileAPI.login()
        .then((res) => {
            // dispatch(setCardsAC())
        })
}


//types
export type SetCardsType = ReturnType<typeof setCardsAC>
export type ProfileActionsType = SetCardsType