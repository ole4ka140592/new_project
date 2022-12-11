import {instance} from "../../../common/instance";


//api
export const forgotPasswordAPI = {
    forgotPassword(forgotPasswordForm: ForgotPasswordFormFormType) {
        return instance.post("/auth/forgot", {forgotPasswordForm})
    },
}

export type ForgotPasswordFormFormType = {
    email: string,
    from?: string,
    message?: string
}
