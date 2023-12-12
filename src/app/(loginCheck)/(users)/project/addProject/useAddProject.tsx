import { routeHttp } from '../../../../../utils/api'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddProjectSchemaType, addProjectSchema } from './addProjectSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const useAddProject = () => {
    const router = useRouter();
    const { isOpen, onOpen, onClose }: UseDisclosureReturn = useDisclosure();
    const [loading, setLoading] = useState(true);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<AddProjectSchemaType>({
        resolver: zodResolver(addProjectSchema),
    });

    const addProject = async () => {
        const inputData = watch();
        if (typeof window !== 'undefined') {
            const loginToken = localStorage.getItem('token');
            setLoading(false);
            try {
                const response = await routeHttp.post('/api/addProjectData', inputData, {
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
        addProject,
        onClose,
        isOpen,
        onOpen,
    }

}

export default useAddProject;