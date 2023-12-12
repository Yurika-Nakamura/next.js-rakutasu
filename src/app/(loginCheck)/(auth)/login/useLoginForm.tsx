import { routeHttp } from '../../../../utils/api'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginFormSchema, LoginFormSchemaType } from './loginFormSchema';
import { zodResolver } from "@hookform/resolvers/zod";

const useLoginForm = () => {
  const router = useRouter();
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const login = async () => {
    const inputData = watch();
    setLoading(false)
    setLoginErrorMessage('');
    
    try {
      const response = await routeHttp.post('/api/login', inputData);
      localStorage.setItem('token', response.data.token);
      setLoading(true);
      router.push('/home');
    } catch (error: any) {
      if (error.response.status === 401) {
        setLoginErrorMessage('メールアドレスまたはパスワードが間違っています。')
        setLoading(true)
      } else {
        console.error('その他のエラー:', error.message);
        setLoading(true)
      }
    }
  }
  
    return {
      loading,
      register,
      handleSubmit,
      errors,
      loginErrorMessage,
      login,
    };
  }

export default useLoginForm;