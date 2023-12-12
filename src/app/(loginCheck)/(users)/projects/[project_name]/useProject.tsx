import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { routeHttp } from '../../.././../../utils/api'
import { useRouter } from 'next/navigation'

type ProjectDataProps ={
    id: number,
    user_id: number,
    project_name: string,
    status: string,
    note: string,
    total_hours: number,
    start_date: string,
    end_date: string,
}

const useProject = () => {
    const Params = useSearchParams()
    const projectId = Params.get('id');
    const router = useRouter();
    const [projectData, setProjectData] = useState<ProjectDataProps>();

    useEffect(() => {
        const getProjectData = async () => {
            try {
                if (typeof window !== 'undefined') {
                    const loginToken = localStorage.getItem('token');
                    const response = await routeHttp.get('/api/getProjectData', {
                        params: {
                            project_id: projectId
                        },
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${loginToken}`
                        }
                    });
                    setProjectData(response.data.project);
                }
            } catch (error: any) {
                console.error('その他のエラー:', error.message);
                router.push('/error');
            }
        }
        getProjectData()
    }, []);


    return {
        projectData,
    }
}

export default useProject