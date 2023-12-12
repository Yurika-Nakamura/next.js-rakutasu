import { FC } from 'react'
import { Input, FormControl, FormErrorMessage, FormLabel} from "@chakra-ui/react";
import styled from 'styled-components';

const InputTextBoxDiv = styled.div`
    height: 15px;
`;

type InputProps = {
    placeholder?: string,
    type: string,
    label: string,
    id: string,
    isInvalid: boolean;
    registerData: {
        name: string,
    };
    errorMessage?: string | undefined,
    value?: string | undefined,
};

const InputTextBox: FC<InputProps> = ({ placeholder, type, isInvalid, label, id, registerData, errorMessage, value }) => {
    return (
        <>
            <FormControl isInvalid={isInvalid} mb={3} >
                <FormLabel fontSize='xs'>{label}</FormLabel>
                <Input placeholder={placeholder} type={type} id={id} {...registerData} variant="filled" />
                <InputTextBoxDiv>
                    <FormErrorMessage>
                        {errorMessage}
                    </FormErrorMessage>
                </InputTextBoxDiv>
            </FormControl>
        </>
    )
}

export default InputTextBox;