//api
import {instance} from "../common/instance";

export const profileAPI = {
    setPack() {
        return instance.get("/cards/pack")
    },
}
