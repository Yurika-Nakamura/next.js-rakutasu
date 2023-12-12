import { FC, ReactNode } from 'react'
import { Container } from "@chakra-ui/react"

type MainContainerProps = {
    children: ReactNode,
}
const MainContainer: FC<MainContainerProps> = ({children}) => {
    return (
        <Container maxW={'8xl'}>
            {children}
        </Container>
    )
}

export default MainContainer;