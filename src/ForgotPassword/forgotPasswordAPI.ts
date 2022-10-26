import {instance} from "../common/instance";


//api
export const forgotPasswordAPI = {
    login(registrationForm: RegistrationFormType) {
        return instance.post("/auth/register", registrationForm)
    },
}

export type RegistrationFormType = {
    email: string,
    password: string,
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