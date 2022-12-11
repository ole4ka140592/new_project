import {instance} from "../../../common/instance";


//api
export const loginAPI = {
    login(loginForm: LoginFormType) {
        return instance.post<ResponseLoginType>("/auth/login", loginForm)
    },
    logout() {
        return instance.delete("/auth/me")
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