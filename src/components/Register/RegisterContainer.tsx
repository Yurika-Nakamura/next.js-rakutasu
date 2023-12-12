import { Container, Flex, Heading } from '@chakra-ui/react'
import RegisterForm from './RegisterForm'

const ReagisterContainer = () => {
    return (
        <Container maxW='600px'>
            <Flex direction="column" padding={20} rounded={4}>
                <Heading mb={6} textAlign="center">サインアップ</Heading>
                <Container marginTop={4}>
                <RegisterForm />
                </Container>
            </Flex>
        </Container>
    )
}

export default ReagisterContainer;