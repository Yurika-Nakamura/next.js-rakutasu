'use client'
import { motion, HTMLMotionProps, isValidMotionProp } from 'framer-motion'
import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { FC } from 'react'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

export const MotionBox: FC<MotionBoxProps> = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})