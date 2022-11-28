//api

import {instance} from "../../common/instance";

export const packsAPI = {
    setPack() {
        return instance.get<CardsPacksType>("/cards/pack")
    },
}

type UserType = {
    _id: string,
    user_id: string,
    user_name: string,
    private: boolean,
    name: string,
    path: string,
    grade: number,
    shots: number,
    deckCover: string,
    cardsCount: number,
    type: string,
    rating: number,
    created: string,
    updated: string,
    more_id: string,
    __v: 0
}

type CardsPacksType = {
    cardPacks: Array<UserType>,
    cardPacksTotalCount: number,
    maxCardsCount: number,
    minCardsCount: number,
    page: number,
    pageCount: number,
    token: string
    tokenDeathTime: number
}
