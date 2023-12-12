import { routeHttp } from '../../../../../utils/api'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddTaskSchemaType, addTaskSchema } from './addTaskSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDisclosure } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'

const useAddTask = () => {
    const Params = useSearchParams();
    const projectId = Params.get('project_id');

    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(true);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<AddTaskSchemaType>({
        resolver: zodResolver(addTaskSchema),
    });

    const addTask = async () => {
        const inputData = watch();
        if (typeof window !== 'undefined') {
            const loginToken = localStorage.getItem('token');
            setLoading(false);
            try {
                const response = await routeHttp.post('/api/addTaskData', inputData, {
                    params: {
                        project_id: projectId,
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${loginToken}`
                      },
                });
                setLoading(true);
                onClose();
                window.location.reload();
            } catch (error: any) {
                console.error('その他のエラー:', error.message);
                router.push('/error');
            }
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        loading,
        addTask,
        onClose,
        isOpen,
        onOpen,
    }

}

export default useAddTask;