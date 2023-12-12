import { routeHttp } from '../../../../utils/api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RegisterFormSchemaType, registerFormSchema } from './registerFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const useRegisterForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [registerErrorMessage, setRegisterErrorMessage] = useState('');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormSchemaType>({
        resolver: zodResolver(registerFormSchema),
    });

    const registerForm = async () => {
        const inputData = watch();
        setLoading(false);
        setRegisterErrorMessage('');

        try {
            const response = await routeHttp.post('/api/register', inputData);
            setLoading(true);
            router.push('/login');
        } catch (error: any) {
            if (error.response.status === 401) {
                setRegisterErrorMessage('メールアドレスまたはパスワードが間違っています。')
                setLoading(true)
            } else {
                console.error('その他のエラー:', error.message);
                setLoading(true)
            }
        }
    }

    return {
        registerForm,
        register,
        handleSubmit,
        errors,
        loading,
        registerErrorMessage,
    };
}

export default useRegisterForm;