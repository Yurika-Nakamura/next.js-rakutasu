import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import SelectForm from '../FormItems/Select/Select'

const statusData = ['進行中', '休止中', 'キャンセル', '完了'];

const ProjectFormContainer = () => {
    return (
        <Box>
            <SelectForm selectData={statusData} />

        </Box>

    )
}

export default ProjectFormContainer;