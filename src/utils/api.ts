import axios from "axios";
import { useRouter } from 'next/navigation'
import { useState } from 'react' 

export const routeHttp = axios.create({
    baseURL: 'http://localhost',
    responseType: 'json',
 });

export const useApiCaller = (apiEndpoint: string) => {
    const router = useRouter()
    const [loading, setLoading] = useState(true);

    const handlePostApiCall = async (inputData?: any) => {
        if (typeof window !== 'undefined') {
            const loginToken = localStorage.getItem('token');
            setLoading(false);
            try {
                const response = await routeHttp.post(apiEndpoint, inputData, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${loginToken}`
                    },
                });
                setLoading(true);
                return response
            } catch (error: any) {
                console.error('その他のエラー:', error.message);
                router.push('/error');
                throw error;
            }
        }
    }

    const handleGetApiCall = async (inputData?: any) => {
        if (typeof window !== 'undefined') {
            const loginToken = localStorage.getItem('token');
            setLoading(false);
            try {
                const response = await routeHttp.get(apiEndpoint, {
                    data: inputData,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${loginToken}`
                    },
                });
                setLoading(true);
                return response;
            } catch (error: any) {
                console.error('その他のエラー:', error.message);
                router.push('/error');
                throw error;
            }
        }
    }

    return {
        router,
        loading,
        handlePostApiCall,
        handleGetApiCall,
    }
 };
 

