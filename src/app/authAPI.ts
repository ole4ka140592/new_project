import {instance} from "../common/instance";


//api
export const authAPI = {
    me() {
        return instance.post("/auth/me", )
    },
}

export type AuthFormType = {

}