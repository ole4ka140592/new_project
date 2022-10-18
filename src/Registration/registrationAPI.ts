import {instance} from "../common/instance";


//api
export const registrationAPI = {
    login(loginForm: LoginFormType) {
        return instance.post<ResponseLoginType>("/auth/login", loginForm)
    },
}

export type LoginFormType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

type ResponseLoginType = {
    avatar: string,
    created: string,
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    verified: boolean,
    __v: number,
    _id: string
}