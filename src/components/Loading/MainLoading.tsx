import { MotionBox } from './motionBox'

import {
  Modal,
  Box,
  ModalOverlay,
  useBreakpointValue
} from '@chakra-ui/react'

const LoadingCircle = ({ animateScale }: {animateScale: Array<number>}) => {
  return (
    <MotionBox 
      width={'30px'}
      height={'30px'}
      borderRadius={'50%'}
      mr={6}
      ml={-3}
      bg={'white'}
      animate={{scale: animateScale}}
      transition={{
        duration: 1.5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  )
}

export const MainLoading = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void}) => {
  const isPc = useBreakpointValue({base: false, md: true})
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'} size={'xl'}>
        <Box position={'relative'}>
          <ModalOverlay>
            <Box
              display={'flex'}
              position={'absolute'}
              zIndex={10000} // ModalOverlayが 1300 程度
              top={'50%'}
              left={isPc ? '50%' : '40vw'}
            >
              <LoadingCircle
                animateScale={
                  [2, 1, 1]
                }
              />
              <LoadingCircle
                animateScale={
                  [1, 2, 1]
                }
              />
              <LoadingCircle
                animateScale={
                  [1, 1, 2]
                }
              />
            </Box>
          </ModalOverlay>
        </Box>
      </Modal>
    </>
  )
}