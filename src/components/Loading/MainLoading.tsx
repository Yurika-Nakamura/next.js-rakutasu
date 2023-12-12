'use client'
import { Box, Heading } from '@chakra-ui/react'

const MainLoading = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        Loading
      </Heading>
    </Box>
  )
}

export default MainLoading;