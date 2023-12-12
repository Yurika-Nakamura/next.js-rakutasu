import {
    Box,
    Flex,
    FlexProps,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal
} from '@chakra-ui/react'
import { IoIosMore } from "react-icons/io";

interface NavItemProps extends FlexProps {
    children: React.ReactNode
    href?: string
}

const ProjectNavItem = ({ href, children, ...rest }: NavItemProps) => {
    return (
          <Menu>
          {({ isOpen }) => (
            <>
            <Box
            w='100%'
            h='100%'
            display='flex'
            justifyContent='space-between'
            px='3'
            >
              <Box
              w='100%'
              as="a"
              href={href}
              style={{ textDecoration: 'none' }}
              _focus={{ boxShadow: 'none' }}
              >
                { isOpen ?
                <Flex
                justifyContent='space-between'
                p="2"
                mx="2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bg='cyan.400'
                color='white'
                {...rest}
                >
                  {children}
                </Flex>
                :
                <Flex
                justifyContent='space-between'
                p="2"
                mx="2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: 'cyan.400',
                  color: 'white',
                }}
                {...rest}
                >
                  {children}
                </Flex>
                }
              </Box>
              <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              >
                <MenuButton><IoIosMore /></MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem>削除</MenuItem>
                    <MenuItem>編集</MenuItem>
                  </MenuList>
                </Portal>
              </Box>
            </Box>
            </>
          )}
        </Menu>
    )
}

export default ProjectNavItem;