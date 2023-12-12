'use client'
import { Box, Heading, Text } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/login');
        }, 3000);
    }, []);

    return (
        <Box textAlign="center" py={10} px={6}>
            <InfoIcon boxSize={'50px'} color={'blue.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                パスワードの再設定が完了しました。
            </Heading>
            <Text color={'gray.500'}>
                3秒後にログイン画面にリダイレクトします。
            </Text>
        </Box>
    )
}

export default Page;