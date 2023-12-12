import { FC, ReactNode } from 'react'
import { Stack, Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

type LinkTabProps = {
    children: ReactNode,
    colorScheme: ChakraButtonProps['colorScheme'],
    fontSize: string,
    tabHandler: () => void,
}

const LinkTab: FC<LinkTabProps> = ({children, tabHandler, colorScheme, fontSize}) => {
    const clickEvent = () => {
        tabHandler();
    }
    return (
        <Stack direction='row' spacing={4} align='center' textAlign="center">
            <Button onClick={clickEvent} colorScheme={colorScheme} variant='link' ml='auto' mr='auto' fontSize={fontSize} >
                {children}
            </Button>
        </Stack>
    )
}

export default LinkTab;