import useLoginForm from '../../app/(loginCheck)/(auth)/login/useLoginForm'
import FormErrorTextDiv from '../FormItems/FormErrorText/FormErrorTextDiv'
import FormErrorText from '../FormItems/FormErrorText/FormErrorText'
import InputTextBox from '../FormItems/InputText/InputTextBox'
import { ButtonM, LoadingButtonM } from '../Buttons/Button'

const MailFormArea = () => {
    const { loading, register, handleSubmit, errors, login, loginErrorMessage } = useLoginForm();
    return (
        <>
            <FormErrorTextDiv>
                {loginErrorMessage && <FormErrorText isInvalid={true} errorMessage={loginErrorMessage} />}
            </FormErrorTextDiv>
            <form onSubmit={handleSubmit(login)}>
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
                {loading ? 
                <ButtonM 
                bg="cyan.400"
                color="white"
                text="メールアドレスでログインする" /> :
                <LoadingButtonM />
                }
            </form >
        </>
    )
}

export default MailFormArea;