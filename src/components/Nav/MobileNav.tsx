'use client'
import { useState } from 'react'
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react'
import {
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import UseLogoutAction from '../../app/(loginCheck)/(users)/logout/useLogoutAction'
import { useHomeDataContext } from '../../contexts/homeContext'

interface MobileProps extends FlexProps {
    onOpen: () => void
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const [loading, setLoading] = useState(true);
    const { logoutAction } = UseLogoutAction();
    const [data] = useHomeDataContext();
    const clickHandle = () => {
        setLoading(false);
        logoutAction()
    }
    
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold">
          Logo
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://avatars.dicebear.com/api/male/username.svg'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">{data?.user['last_name']} {data?.user['first_name']}</Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                  <Box mt={6} mb={6}>
                    <Text fontSize="sm" color="gray.600" textAlign='center'>
                      {data?.user['last_name']} {data?.user['first_name']}
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign='center'>
                      {data?.user['email']}
                    </Text>
                  </Box>
                <MenuDivider />
                { 
                    loading ? 
                    <MenuItem onClick={clickHandle}>Logout</MenuItem> 
                    : 
                    <MenuItem>
                        <Spinner size='sm' mr={2} />Loading
                    </MenuItem> 
                    }
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    )
}

export default MobileNav;