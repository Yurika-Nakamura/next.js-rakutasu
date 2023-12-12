import { FC, ReactNode } from 'react'
import { UseDisclosureReturn } from '@chakra-ui/react';
import { Button, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
} from '@chakra-ui/react'

type InitialModalProps = {
    text: string,
    onOpen: UseDisclosureReturn['onOpen'],
    onClose: UseDisclosureReturn['onClose'],
    isOpen: UseDisclosureReturn['isOpen'],
    children: ReactNode
  }

const InitialModal: FC<InitialModalProps> = ({text, onOpen, onClose, isOpen, children}) => {
const handleClick = () => {
    onOpen()
}

    return (
        <>
            <Button
            onClick={handleClick}
            key='xs'
            m={4}
            bg='white'
            >{text}</Button>

        <Modal 
        onClose={onClose} 
        size='xs' 
        isOpen={isOpen}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{text}</ModalHeader>
            <ModalCloseButton />
            {children}
            </ModalContent>
        </Modal>
        </>
    )
};

export default InitialModal;