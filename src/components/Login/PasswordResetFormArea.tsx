import FormErrorTextDiv from '../FormItems/FormErrorText/FormErrorTextDiv'
import FormErrorText from '../FormItems/FormErrorText/FormErrorText'
import InputTextBox from '../FormItems/InputText/InputTextBox'
import { ButtonM, LoadingButtonM } from '../Buttons/Button'
import usePasswordReset from '../../app/(loginCheck)/(auth)/login/usePasswordReset'
import { Text } from "@chakra-ui/react";


const PasswordResetFormArea = () => {
    const { loading, register, handleSubmit, errors, passwordResetErrorMessage, passwordReset, mailSent } = usePasswordReset();
    return (
        <>
        { mailSent ? 
        <Text fontSize='md' textAlign='center' mt={10} mb={10} >パスワード再設定メールの送信が完了しました</Text>
        :
        <>
            <FormErrorTextDiv>
                {passwordResetErrorMessage && <FormErrorText isInvalid={true} errorMessage={passwordResetErrorMessage} />}
            </FormErrorTextDiv>
            <form onSubmit={handleSubmit(passwordReset)}>
                <InputTextBox 
                placeholder="sample@sample.com" 
                type="email" 
                label="Email" 
                id="email"
                isInvalid={!!errors.email}
                registerData={register('email')}
                errorMessage={errors.email && errors.email.message}
                />
                {loading ? 
                <ButtonM 
                bg="cyan.400" 
                color='white'
                text="リセット用リンクを送信する" /> :
                <LoadingButtonM />
                }
            </form >
        </>
        }
        </>
    )
}

export default PasswordResetFormArea;