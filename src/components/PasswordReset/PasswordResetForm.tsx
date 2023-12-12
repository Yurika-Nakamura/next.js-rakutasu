`use client`
import { Text, Container, Link } from '@chakra-ui/react'
import InputTextBox from '../FormItems/InputText/InputTextBox'
import { ButtonM, LoadingButtonM } from '../Buttons/Button'
import usePasswordResetForm from '../../app/(noLoginCheck)/password_reset/[token]/usePasswordResetForm'

const PasswordResetForm = () => {
    const { register, handleSubmit, loading, errors, doResetPassword, errorMessage, isVerified } = usePasswordResetForm();
    return (
        <>
        { isVerified ? 
        <>
            <form onSubmit={handleSubmit(doResetPassword)}>
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
                id="passwordConfirm"
                isInvalid={!!errors.passwordConfirm}
                registerData={register('passwordConfirm')}
                errorMessage={errors.passwordConfirm && errors.passwordConfirm.message}
                />
                {loading ? 
                <ButtonM 
                bg="cyan.400" 
                color="white" 
                text="パスワード再設定" /> :
                <LoadingButtonM />
                }
            </form>
        </>
        :
        <>
            <Text fontSize='18px' color='tomato' textAlign="center" mb={2} >{errorMessage}</Text>
            <Container centerContent mt={2} >
                <Link href="/login" textAlign="center">ログインページへ戻る</Link>
            </Container>
        </>
        }
        </>
    )
}

export default PasswordResetForm;