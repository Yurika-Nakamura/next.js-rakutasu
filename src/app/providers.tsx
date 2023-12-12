'use client'

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { UserProvider } from '../contexts/userContext'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider>
                <UserProvider>
                        {children}  
                </UserProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}