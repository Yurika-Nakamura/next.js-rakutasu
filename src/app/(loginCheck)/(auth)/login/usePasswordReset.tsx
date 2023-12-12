import { routeHttp } from '../../../../utils/api'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { passwordResetFormSchema, PasswordResetFormSchemaType } from './passwordResetFormSchema';
import { zodResolver } from "@hookform/resolvers/zod";

const usePasswordReset = () => {
  const [mailSent, setMaliSent] = useState(false);
  const [passwordResetErrorMessage, setPasswordResetErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordResetFormSchemaType>({
    resolver: zodResolver(passwordResetFormSchema),
  });

  const passwordReset = async () => {
    const inputData = watch();
        setLoading(false)
        setPasswordResetErrorMessage('')
        try {
          const response = await routeHttp.post('/api/password/reset/request', inputData);
          setMaliSent(response.data.mail_sent);
          setLoading(true)
        } catch (error: any) {
          if (error.response.status === 401) {
            setPasswordResetErrorMessage('未登録のメールアドレスです')
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
      passwordResetErrorMessage,
      passwordReset,
      mailSent,
    };
}

export default usePasswordReset;