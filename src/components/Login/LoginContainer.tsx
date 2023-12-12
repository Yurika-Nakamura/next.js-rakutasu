import { Container, Flex, Heading, Divider } from '@chakra-ui/react'
import SocialLoginContainer from './SocialLoginContainer'
import { useTabContext } from '../../contexts/userContext'
import MailFormArea from './MailFormArea'
import PasswordResetFormArea from './PasswordResetFormArea'
import LinkTab from '../Link/LinkTab'

const LoginContainer = () => {
    const [tab, setTab] = useTabContext();

    const tabHandler = () => {
        setTab((prev: boolean) => !prev);
      }
      
    return (
        <Container maxW='600px'>
            <Flex direction="column" padding={20} rounded={4}>
                <Heading mb={6} textAlign="center">ログイン</Heading>
                <SocialLoginContainer />
                <Divider />
                <Container marginTop={4}>
                    { tab ? <MailFormArea /> : <PasswordResetFormArea /> }
                    <LinkTab tabHandler={tabHandler} colorScheme="gray" fontSize="sm">
                        {tab ? 'パスワードを忘れた場合' : 'メールアドレスでログインする'}
                    </LinkTab>
                </Container>
            </Flex>
        </Container>
    )
}

export default LoginContainer;