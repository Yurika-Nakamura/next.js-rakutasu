import { useEffect } from 'react';
import { routeHttp } from '../../../../utils/api'
import { useRouter } from 'next/navigation'
import { useHomeDataContext } from '../../../../contexts/homeContext'

const useHomeData = () => {
    const router = useRouter();
    const [, setData] = useHomeDataContext();

    useEffect(() => {
        const getHomeData = async () => {
            try {
                if (typeof window !== 'undefined') {
                    const loginToken = localStorage.getItem('token');
                    const response = await routeHttp.get('/api/getHomeData', {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${loginToken}`
                        },
                    });
    
                    setData(response.data);
                }
            } catch (error: any) {
                console.error('その他のエラー:', error.message);
                router.push('/error');
            }
        };
        getHomeData();
    }, []);
}

export default useHomeData;