import {instance} from "../../common/instance";


//api
export const appAPI = {
    me() {
        return instance.post("/auth/me", {})
    },
}

export type AuthFormType = {

}