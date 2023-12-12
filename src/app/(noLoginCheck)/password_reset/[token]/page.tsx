'use client'
import { useState } from 'react'
import { Flex, Box, Icon, Heading, Spacer, Divider, Container } from '@chakra-ui/react'
import MainContainer from '../../../../components/Container/MainContainer'
import PasswordResetForm from '../../../../components/PasswordReset/PasswordResetForm'
import { SiAlby } from "react-icons/si";

export default function Page() {
    const [password, setPassword] = useState('');
    return (
        <MainContainer>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Flex align="center">
                        <Icon as={SiAlby} mr={2} fontSize="25" /><Heading size='md'>Rakutasu</Heading>
                    </Flex>
                </Box>
                <Spacer />
            </Flex>
        <Divider />
        <Container maxW='600px'>
            <Flex direction="column" padding={20} rounded={4}>
                <Heading mb={6} textAlign="center">パスワード再設定</Heading>
                <Container marginTop={4}>
                <PasswordResetForm />
                </Container>
            </Flex>
        </Container>
        </MainContainer>
    )
}