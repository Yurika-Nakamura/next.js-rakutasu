'use client'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { useHomeDataContext } from '../../../../../contexts/homeContext'
import { useSearchParams } from "next/navigation";
import useProject from './useProject'
import ProjectFormContainer from '../../../../../components/Project/ProjectFormContainer'

const Page = () => {
    const { projectData } = useProject();
    console.log(projectData)
    const projectName = useSearchParams();
    return (
        <>
        <Tabs bg='white' borderRadius='4'>
            <TabList>
                <Tab>{projectData && projectData['project_name']}</Tab>
                <Tab>タスク</Tab>
                <Tab>スケジュール</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                <ProjectFormContainer />
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </>
    )
}

export default Page;