import { routeHttp } from '../../../../utils/api'
import { useRouter } from 'next/navigation'

const UseLogoutAction = () => {
    const router = useRouter();

    const logoutAction = async () => {
        try {
            if (typeof window !== 'undefined') {
                const loginToken = localStorage.getItem('token');
                const response = await routeHttp.get('/api/logout', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${loginToken}`
                    },
                });
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    router.push('/login');
                }
            }
        } catch (error: any) {
            console.error('その他のエラー:', error.message);
            router.push('/error');
        }
    };

    return {
        logoutAction,
    };
}

export default UseLogoutAction;