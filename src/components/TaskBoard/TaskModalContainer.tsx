import InitialModal from '../Modal/InitialModal'
import useAddTask from '../../app/(loginCheck)/(users)/task_board/[project_name]/useAddTask'
import { ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import InputTextBox from '../FormItems/InputText/InputTextBox'

const TaskModalContainer = () => {
    const { register, handleSubmit, errors, loading, addTask, onClose, isOpen, onOpen } = useAddTask();
    return (
        <InitialModal
        text='タスクを作成'
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        >
            <form>
                <ModalBody>
                    <InputTextBox
                    type="text"
                    label="タスク名"
                    id="project_name"
                    isInvalid={!!errors.task_title}
                    registerData={register('task_title')}
                    errorMessage={errors.task_title && errors.task_title.message}
                    />
                </ModalBody>
                <ModalFooter>
                    { loading ?
                    <Button 
                    onClick={handleSubmit(addTask)} 
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
        </InitialModal>
    )
}

export default TaskModalContainer;