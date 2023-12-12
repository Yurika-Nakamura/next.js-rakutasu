import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { usePathname, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { PasswordResetFormSchema, passwordResetFormSchema } from './passwordResetSchema'
import { routeHttp } from '../../../../utils/api'


const usePasswordResetForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<PasswordResetFormSchema>({
        resolver: zodResolver(passwordResetFormSchema),
    });

    const pathname = usePathname();
    const pathnameSegments = pathname.split('/');
    const token = pathnameSegments[pathnameSegments.length - 1];

    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    useEffect(()=>{
        doVerifyTokenAndEmail();
    },[]);

    const doVerifyTokenAndEmail = async () => {
        routeHttp.post('/api/password/reset/verify', {email, token}).then((res: any) => {
            if (!res.data.message) {
                setIsVerified(res.data.verified);
            } else {
                setErrorMessage(res.data.message);
                setIsVerified(false);
            }
        });
    }

    const doResetPassword = async () => {
        const inputData = watch();
        const data = {
            email: email,
            token: token,
            ...inputData
        };
        setLoading(false);
        routeHttp.post('/api/password/reset', data).then((res: any) => {
            router.push('/password_reset/complete');
        }).catch((error: any) => {
            setLoading(true);
        })
    }

    return {
        register,
        handleSubmit,
        loading,
        isVerified,
        errorMessage,
        errors,
        doResetPassword,
    };
}

export default usePasswordResetForm;