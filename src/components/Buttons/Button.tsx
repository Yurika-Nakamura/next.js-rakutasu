import { FC } from 'react';
import { Button } from "@chakra-ui/react";

type ButtonProps = {
    text: string,
    onClick?: (text: string) => void,
    border?: string,
    borderColor?: string,
    color?: string,
    bg: string,
}
export const ButtonM: FC<ButtonProps> = ({ text, onClick, border, borderColor, color, bg }) => {
    const clickHandler = () => {
        if (onClick) {
            onClick(text);
        }
    }
    return (
        <Button 
        onClick={clickHandler} 
        type={"submit"} 
        w='100%' mb={6} 
        border={border}
        borderColor={borderColor}
        color={color}
        bg={bg}
        >{text}</Button>
    )
}

export const LoadingButtonM: FC = () => {
    return (
        <Button
        w='100%' mb={6}
        isLoading
        loadingText='Loading...'
        colorScheme='teal'
        variant='outline'
        spinnerPlacement='start'
        >
            Submit
        </Button>
    )
}
