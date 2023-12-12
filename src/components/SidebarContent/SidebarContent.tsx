import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Icon,
    BoxProps,
    Heading,
    Spacer,
} from '@chakra-ui/react'
import LinkItems from '../Link/LinkItems'
import NavItem from '../Nav/NavItem'
import ProjectNavItem from '../Nav/ProjectNavItem'
import { IconModal } from '../Modal/Modal'
import { useHomeDataContext } from '../../contexts/homeContext'
import { SiAlby } from "react-icons/si";

interface SidebarProps extends BoxProps {
    onClose: () => void
}

interface DataType {
  id: number;
  project_name: string;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [data] = useHomeDataContext();
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Flex align="center">
              <Icon as={SiAlby} mr={2} fontSize="25" /><Heading size='md'>Rakutasu</Heading>
          </Flex>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} href={link.href} >
            {link.name}
          </NavItem>
        ))}
          <Flex
            align="center"
            p="2"
            mx="2"
            borderRadius="lg"
            role="group"
            {...rest}>
              <Flex mb={2}>
                <Heading as='h5' size='sm' mr={1}>プロジェクト</Heading>
                <Spacer />
                <IconModal />
              </Flex>
              <Box overflow="scroll" maxH="350px">
                {data && data.project.map((item: DataType) => (
                  <ProjectNavItem key={item['id']} href={`/task_board/${item['project_name']}?project_id=${item['id']}`} >
                    {item['project_name']}
                  </ProjectNavItem>
                ))}
              </Box>
          </Flex>
      </Box>
    )
}

export default SidebarContent;