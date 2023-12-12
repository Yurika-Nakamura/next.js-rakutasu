'use client'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    IconButton,
  } from '@chakra-ui/react'
import { IoAddOutline } from "react-icons/io5";
import { useRef } from 'react'
import InputTextBox from '../FormItems/InputText/InputTextBox'
import useAddProject from '../../app/(loginCheck)/(users)/project/addProject/useAddProject'

type XsModalProps = {

}

export const IconModal = () => {
    
    const { register, handleSubmit, errors, loading, addProject, isOpen, onOpen, onClose } = useAddProject();
    const initialRef = useRef(null)
    const handleSizeClick = () => {
      onOpen()
    }
  
    return (
      <>
        <IconButton
            isRound={true}
            variant='solid'
            aria-label='Done'
            fontSize='18px'
            boxSize="20px"
            icon={<IoAddOutline />}
            onClick={handleSizeClick}
        />
        <Modal
        initialFocusRef={initialRef}
        onClose={onClose} 
        size="xs" 
        isOpen={isOpen}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>プロジェクトを作成</ModalHeader>
            <ModalCloseButton />
            <form>
                <ModalBody>
                    <InputTextBox
                    type="text"
                    label="プロジェクト名"
                    id="project_name"
                    isInvalid={!!errors.project_name}
                    registerData={register('project_name')}
                    errorMessage={errors.project_name && errors.project_name.message}
                    />
                </ModalBody>
                <ModalFooter>
                    { loading ?
                    <Button 
                    onClick={handleSubmit(addProject)} 
                    colorScheme='blue' 
                    mr={3}
                    width='80px'
                    >
                    作成
                    </Button>
                    :
                    <Button 
                    isLoading 
                    colorScheme='blue' 
                    mr={3}
                    width='80px'
                    >
                        Email
                    </Button>
                    }
                    <Button onClick={onClose}>キャンセル</Button>
                </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>
    )
};


