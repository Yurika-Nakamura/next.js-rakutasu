'use client'
import { FC, useState } from 'react'
import { Flex, Heading, Box, Spacer, Divider, ButtonGroup, Button, Icon } from "@chakra-ui/react";
import { useRouter } from 'next/navigation'
import { useHeaderButtonContext } from '../../contexts/userContext'
import { SiAlby } from "react-icons/si";
import { BeatLoader } from 'react-spinners';

type ClickHandler = (tab: string) => void;

const SubHeader: FC = () => {
    const [headerButton, setHeaderButton] = useHeaderButtonContext();
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const clickHandler: ClickHandler = (tab) => {
        setLoading(false);
        setHeaderButton(tab);
        router.push(`/${tab}`);
    }
    return (
        <>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Flex align="center">
                    <Icon as={SiAlby} mr={2} fontSize="25" /><Heading size='md'>Rakutasu</Heading>
                </Flex>
            </Box>
            <Spacer />
            <ButtonGroup gap='1' p='3'>
                { loading ? 
                    headerButton === 'login' ? 
                    <Button 
                    onClick={ () => clickHandler('register') } 
                    bg='cyan.400'
                    color="white"
                    >Sign Up</Button>
                    :
                    <Button 
                    onClick={ () => clickHandler('login') } 
                    bg='cyan.400'
                    color="white"
                    >Login</Button>
                :
                <Button
                isLoading
                bg='cyan.400'
                spinner={<BeatLoader size={8} color='white' />}
                >
                Click me
                </Button>
                }
            </ButtonGroup>
        </Flex>
        <Divider />
        </>
    )
}

export default SubHeader;