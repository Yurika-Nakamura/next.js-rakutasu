import { useState, useEffect } from 'react'
import { routeHttp } from '../../.././../../utils/api'
import { useRouter, useSearchParams } from 'next/navigation'

export interface Task {
    id: number;
    project_id: number;
    task_title: string;
    status: string | null;
    note: string | null;
    progress_percentage: number | null;
}

const useTask = () => {
    const [task, setTask] = useState<Task[]>([]);
    const Params = useSearchParams();
    const projectId = Params.get('project_id');
    useEffect(() => {
        const getTask = async () => {
            if (typeof window !== 'undefined') {
                const loginToken = localStorage.getItem('token');
                const response = await routeHttp.get('/api/getTaskData', {
                    params: {
                        project_id: projectId
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${loginToken}`
                    },
                });
                setTask(response.data.task);
            }
        }
        getTask();
    }, []);
    
    return {
        task,
    }
}

export default useTask;