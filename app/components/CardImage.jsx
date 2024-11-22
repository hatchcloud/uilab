
'use client'
import Placeholder from '@/public/images/image.png'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'




const Title = () => {
    return (
      <motion.div layoutId='expanded' className='w-full text-white text font-medium h-fit bg-gray-900/20 px-4 py-3  backdrop-blur-sm z-40 absolute bottom-0 overflow-hidden rounded-t-xl'>
        <motion.p layoutId='title'>CDMX</motion.p>
      </motion.div>
    )
}
const TitleExpanded = () => {
    return (
      <motion.div layoutId='expanded' className='w-full text-white text font-medium h-fit bg-gray-900/40 px-4 py-3  backdrop-blur-sm z-40 absolute bottom-0 overflow-hidden rounded-xl'>
        <motion.p layoutId='title'>CDMX</motion.p>
        <motion.p layout className=''>This city captures the heart of every visitor, promising unforgettable experiences around every corner</motion.p>
      </motion.div>
    )
}

const CardImage = () => {
    const [isHovered, setHovered] = useState(false);
  return (
    
    <div className='w-52 lg:w-80 h-60 relative overflow-hidden rounded-lg'
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <Image src={Placeholder} fill alt='image-card' className='z-0' placeholder='blur' />
      <AnimatePresence>
        {isHovered ? (<TitleExpanded /> ) : (<Title />) } 
      </AnimatePresence>
    </div>
  )
}

export default CardImage
