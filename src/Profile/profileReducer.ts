import {profileAPI} from "./profileAPI";
import {Dispatch} from "redux";


const initialState = {

        cardsCount:number,
        created:string,

grade: number,

more_id    :string,
name:string,
path:string,

private: boolean,

rating: number,

shots:number,
type: string,
    "pack"
updated
    :
    "2022-11-27T20:29:39.406Z"
user_id
    :
    "636fed241709c207a4b7d6dc"
user_name
    :
    "kirill"
__v
    :
    0

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