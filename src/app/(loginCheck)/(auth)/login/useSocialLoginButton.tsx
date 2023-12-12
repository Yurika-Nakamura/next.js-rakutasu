import { routeHttp } from '../../../../utils/api'

const useSocialLoginButton = () => {
    const socialLogin = async (provider: string) => {
        routeHttp.get(`/api/login/${provider}`).then((res: any) => {
            window.location.href = res.data;
        })
    }
    return {
        socialLogin,
    }
}

export default useSocialLoginButton;