//api
import {instance} from "../common/instance";

export const profileAPI = {
    login() {
        return instance.get("/cards/pack")
    },
}
