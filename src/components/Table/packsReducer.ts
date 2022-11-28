
import {Dispatch} from "redux";
import {packsAPI} from "./packsAPI";


const initialState = {}
type InitialStateType = typeof initialState

export const packsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'packs/SET-PACKS':
            return {...state, value: action.value}
        default:
            return state
    }
}


// actions
export const setPacksAC = (value: any) =>
    ({type: 'packs/SET-PACKS', value} as const)


// thunks
export const setPacksTC = () => (dispatch: Dispatch) => {
    // dispatch(setAppStatusAC("loading"))
    packsAPI.setPack()
        .then((res) => {
            // console.log("good")
            // dispatch(setCardsAC(res.data))
            // dispatch(setCardsAC())
        })
}


// //types
// export type SetCardsType = ReturnType<typeof setCardsAC>
// export type ProfileActionsType = SetCardsType