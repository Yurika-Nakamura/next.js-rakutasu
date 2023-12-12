import { FC } from 'react'
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

type FormErrorProps = {
    isInvalid: boolean;
    errorMessage: string;
};

const FormErrorText: FC<FormErrorProps> = ({ isInvalid, errorMessage }) => {
    return (
        <FormControl isInvalid={isInvalid} >
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    )
}

export default FormErrorText;