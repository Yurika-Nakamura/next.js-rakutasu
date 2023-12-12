import { FC } from 'react'
import { 
    Card, 
    Box, 
    Stack, 
    CardBody, 
    Heading, 
    Text, 
    Container,
    Flex,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,

} from '@chakra-ui/react'
import { 
    IoIosCheckmarkCircleOutline, 
    IoIosChatbubbles, 
    IoMdInformationCircleOutline 
} from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

export const ToDoItem = () => {
    return (
        <Container px='8px'>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='auto'
            variant='outline'
            maxW='260px'
            w='260px'
            h='100px'
            maxH='100px'
            >
                <Box
                bg='gray'
                w='18%'
                display='flex' justifyContent='center' alignItems='center'
                >
                    <IoMdInformationCircleOutline color="white" style={{ width: '35px', height: '35px' }} />
                </Box>
                <Stack w='82%'>
                    <CardBody py='2' px='4'>
                        <Flex justifyContent='space-between'>
                            <Text size='md'>タイトル</Text>
                            <Heading size='ms'color='gray'>未対応</Heading>
                        </Flex>
                        <Text py='2' fontSize='sm' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                            TODOはここに登録しますああああああああああああああああああああああああああ
                        </Text>
                        <Text fontSize='xs' justifyContent='end'>
                            データ
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </Container>
    )
}

export const InProgressItem = () => {
    return (
        <Container px='8px'>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='auto'
            variant='outline'
            maxW='260px'
            w='260px'
            h='100px'
            maxH='100px'
            >
                <Box
                bg='blue.300'
                w='18%'
                display='flex' justifyContent='center' alignItems='center'
                >
                    <FaUserEdit color="white" style={{ width: '35px', height: '35px' }} />
                </Box>
                <Stack w='82%'>
                    <CardBody py='2' px='4'>
                        <Flex justifyContent='space-between'>
                            <Text size='md'>タイトル</Text>
                            <Heading size='ms'color='blue.300'>対応中</Heading>
                        </Flex>
                        <Text py='2' fontSize='sm' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                            TODOはここに登録しますああああああああああああああああああああああああああ
                        </Text>
                        <Text fontSize='xs' justifyContent='end'>
                            データ
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </Container>
    )
}

export const InReviewItem = () => {
    return (
        <Container px='8px'>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='auto'
            variant='outline'
            maxW='260px'
            w='260px'
            h='100px'
            maxH='100px'
            >
                <Box
                bg='tomato'
                w='18%'
                display='flex' justifyContent='center' alignItems='center'
                >
                    <IoIosChatbubbles color="white" style={{ width: '35px', height: '35px' }} />
                </Box>
                <Stack w='82%'>
                    <CardBody py='2' px='4'>
                        <Flex justifyContent='space-between'>
                            <Text size='md'>タイトル</Text>
                            <Heading size='ms'color='tomato'>確認中</Heading>
                        </Flex>
                        <Text py='2' fontSize='sm' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                            TODOはここに登録しますああああああああああああああああああああああああああ
                        </Text>
                        <Text fontSize='xs' justifyContent='end'>
                            データ
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </Container>
    )
}

export const DoneItem = () => {
    return (
        <Container px='8px'>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='auto'
            variant='outline'
            maxW='260px'
            w='260px'
            h='100px'
            maxH='100px'
            >
                <Box
                bg='green.300'
                w='18%'
                display='flex' justifyContent='center' alignItems='center'
                >
                    <IoIosCheckmarkCircleOutline color="white" style={{ width: '35px', height: '35px' }} />
                </Box>
                <Stack w='82%'>
                    <CardBody py='2' px='4'>
                        <Flex justifyContent='space-between'>
                            <Text size='md'>タイトル</Text>
                            <Heading size='ms'color='green.300'>完了</Heading>
                        </Flex>
                        <Text py='2' fontSize='sm' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
                            TODOはここに登録しますああああああああああああああああああああああああああ
                        </Text>
                        <Text fontSize='xs' justifyContent='end'>
                            データ
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </Container>
    )
}

export const Item = () => {
    return (
        <Container px='8px'>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='auto'
            variant='outline'
            maxW='260px'
            w='260px'
            h='100px'
            maxH='100px'
            bg='gray.400'
            >
            </Card>
        </Container>
    )
}

type ProjectItemProps = {
    project_name: string,
    status: string,
    total_hours: number,
    start_date: string,
    end_date: string,
}

export const ProjectItem: FC<ProjectItemProps> = ({ project_name, status, total_hours, start_date, end_date }) => {
    return (
        <Container p='0'>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='auto'
            variant='outline'
            maxW='280px'
            w='280px'
            h='100px'
            maxH='100px'
            _hover={{
                opacity: '.7'
            }}
            >
                <Stack w='100%'>
                    <CardBody py='2' px='4'>
                        <Flex justifyContent='space-between'>
                            <Text size='md'>{project_name}</Text>
                            <Heading size='ms'color='green.300'>{status}</Heading>
                        </Flex>
                        <Box mt={5}>
                            <Flex>
                                <Text fontSize='xs'>
                                    合計工数：
                                </Text>
                                <Text fontSize='xs'>
                                    {total_hours}時間
                                </Text>
                            </Flex>
                            <Flex>
                                <Text fontSize='xs'>
                                    納期：
                                </Text>
                                <Text fontSize='xs'>
                                    {start_date} - {end_date}
                                </Text>
                            </Flex>
                        </Box>
                    </CardBody>
                </Stack>
            </Card>
        </Container>
    )
}