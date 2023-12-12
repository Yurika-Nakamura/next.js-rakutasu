import { Select } from '@chakra-ui/react'
import { type } from 'os';
import { FC } from 'react'

type SelectFormProps = {
    selectData: string[],
}
const SelectForm: FC<SelectFormProps> = ({selectData}) => {
    return (
        <Select variant='flushed' placeholder='ステータス'>
            {selectData.map(data => (
                <option key={data} value='option1'>{data}</option>
            ))}
        </Select>
    )
}

export default SelectForm;