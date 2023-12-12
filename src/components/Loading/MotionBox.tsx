import { motion, HTMLMotionProps } from 'framer-motion'
import { chakra, HTMLChakraProps } from '@chakra-ui/react'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionDivProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

export const MotionBox: React.FC<MotionDivProps> = motion(chakra.div as any)