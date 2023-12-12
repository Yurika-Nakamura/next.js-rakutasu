'use client'
import { FC } from 'react'
import { ButtonM } from '../Buttons/Button'
import { Container } from '@chakra-ui/react'
import useSocialLoginButton from '../../app/(loginCheck)/(auth)/login/useSocialLoginButton'

const SocialLoginContainer: FC = () => {
    const { socialLogin } = useSocialLoginButton();
    return (
        <Container marginBottom={5}>
            <ButtonM 
            onClick={ () => socialLogin('google') } 
            text="Googleアカウントでログインする"
            border="1px"
            borderColor="cyan.400"
            color="cyan.400"
            bg="white"
            />
            <ButtonM 
            text="GitHubアカウントでログインする" 
            border="1px"
            borderColor="cyan.400"
            color="cyan.400"
            bg="white"
            />
        </Container>
    )
}

export default SocialLoginContainer;