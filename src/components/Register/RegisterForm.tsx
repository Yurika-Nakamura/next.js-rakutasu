'use client'
import InputTextBox from '../FormItems/InputText/InputTextBox'
import { ButtonM, LoadingButtonM } from '../Buttons/Button'
import useRegisterForm from '../../app/(loginCheck)/(auth)/register/useRegisterForm'

const RegisterForm = () => {
    const { registerForm, register, handleSubmit, errors, loading, registerErrorMessage } = useRegisterForm();
    return (
        <>
            <form onSubmit={handleSubmit(registerForm)}>
                <InputTextBox 
                placeholder="田中" 
                type="text" 
                label="Last name"
                id="last_name"
                isInvalid={!!errors.last_name}
                registerData={register('last_name')}
                errorMessage={errors.last_name && errors.last_name.message}
                />
                <InputTextBox 
                placeholder="太郎" 
                type="text" 
                label="First name"
                id="first_name"
                isInvalid={!!errors.first_name}
                registerData={register('first_name')}
                errorMessage={errors.first_name && errors.first_name.message}
                />
                <InputTextBox 
                placeholder="sample@sample.com" 
                type="email" 
                label="Email" 
                id="email"
                isInvalid={!!errors.email}
                registerData={register('email')}
                errorMessage={errors.email && errors.email.message}
                />
                <InputTextBox
                placeholder="********" 
                type="password" 
                label="Password"
                id="password"
                isInvalid={!!errors.password}
                registerData={register('password')}
                errorMessage={errors.password && errors.password.message}
                />
                <InputTextBox
                placeholder="********" 
                type="password" 
                label="Password(確認)"
                id="password_confirm"
                isInvalid={!!errors.password_confirm}
                registerData={register('password_confirm')}
                errorMessage={errors.password_confirm && errors.password_confirm.message}
                />
                {loading ? 
                <ButtonM 
                bg="cyan.400" 
                color="white" 
                text="サインアップ" /> :
                <LoadingButtonM />
                }
            </form >
        </>
    )
}

export default RegisterForm;