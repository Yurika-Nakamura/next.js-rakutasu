import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const FormErrorTextDivStype = styled.div`
  height: 20px;
  margin-bottom: 10px;
`
type FormErrorTextDivProps = {
    children: ReactNode;
  };

const FormErrorTextDiv: FC<FormErrorTextDivProps> = ({children}) => {
    return (
        <FormErrorTextDivStype>
            {children}
        </FormErrorTextDivStype>
    )
}

export default FormErrorTextDiv;