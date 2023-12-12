'use client'
import { useRouter } from 'next/navigation'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

export default function NotFound() {
    const router = useRouter();

    const clickHandler = () => {
        router.push('/home');
    }
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        サーバーエラー
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Internal Server Error
      </Text>
      <Text color={'gray.500'} mb={6}>
        アクセスしようとしたページは表示できませんでした。
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        onClick={clickHandler}
        >
        Go to Home
      </Button>
    </Box>
  )
}