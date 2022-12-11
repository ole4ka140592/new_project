import {profileAPI} from "../api/profileAPI";
import {Dispatch} from "redux";


const initialState = {}
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
    profileAPI.setPack()
        .then((res) => {
            console.log("good")
            dispatch(setCardsAC(res.data))
            // dispatch(setCardsAC())
        })
}


//types
export type SetCardsType = ReturnType<typeof setCardsAC>
export type ProfileActionsType = SetCardsType