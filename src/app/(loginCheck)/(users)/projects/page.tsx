'use client'
import { GridItem, Grid } from '@chakra-ui/react'
import { ProjectItem } from '../../../../components/TaskBoard/TaskItem'
import NextLink from "next/link"
import { useHomeDataContext } from '../../../../contexts/homeContext'

export default function Page() {
    const [data] = useHomeDataContext();

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={3} h='100%' w="100%" >
            {data && data.project.map((data: any) => (
                <GridItem key={data['id']} w='100%' h='100%' borderRadius={4}>
                    <NextLink href={{ pathname: `/projects/project`, query: {id: data['id']} }}>
                        <ProjectItem 
                        project_name={data['project_name']}
                        status={data['status']}
                        total_hours={data['total_hours']}
                        start_date={data['start_date']}
                        end_date={data['end_date']}
                        />
                    </NextLink>
                </GridItem>
            ))}
        </Grid>
    )

}