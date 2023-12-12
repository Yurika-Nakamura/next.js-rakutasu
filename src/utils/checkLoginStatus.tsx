'use client'
import { useEffect } from 'react'
import { routeHttp } from './api'
import { useRouter } from 'next/navigation'

const CheckLoginStatus = () => {
    const router = useRouter();
    
    useEffect (() => {
        const checkLogin = async () => {
            if (typeof window !== 'undefined') {
                try {
                    const loginToken = localStorage.getItem('token');
                    const response = await routeHttp.get('/api/check-login', {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${loginToken}`
                        },
                    });
                    if (response.status === 401) {
                        router.push('/login');
                    }
                } catch (error: any) {
                    if (error.response.status === 401) {
                        router.push('/login');
                    } else {
                        console.error('その他のエラー:', error.message);
                        router.push('/error');
                    }
                }
            }
        }
        checkLogin();
    }, [router]);
    return null;
}

export default CheckLoginStatus;