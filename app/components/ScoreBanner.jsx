
'use client'
import { useRef, useEffect } from 'react'
import { Plus } from 'lucide-react';
import Level from '@/public/vectors/level.svg'
import Image from 'next/image';
import useMeasure from 'react-use-measure';
import { useMotionValue, motion, animate } from "framer-motion";


const reviews = [
    {
      score: 10,
      color: "bg-orange-600",
      text: "They bring a very different and creative perspective to tackling problems and identifying opportunities!",
    },
    {
      score: 8,
      color: "bg-blue-600",
      text: "Great job! They consistently meet expectations and deliver high-quality work.",
    },
    {
      score: 6,
      color: "bg-yellow-600",
      text: "They have room for improvement in some areas, but overall, they are doing fine.",
    },
    {
      score: 4,
      color: "bg-red-700",
      text: "There are significant areas where improvement is needed to meet expectations.",
    },
  ];



  
  const ReviewsList = ({ review }) => {
    return (
      <div className='flex items-center justify-center'>
         <div className={`${review.color} h-10 w-10 p-[6px] rounded-full mr-1`} >
            <div className='bg-black/30 h-full w-full text-xs rounded-full text-white flex justify-center items-center'>
            <p>{review.score}</p>
            </div>
         </div>

        <p className='whitespace-nowrap text-gray-300'>{review.text}</p>
      </div>
    );
  };

const ScoreBanner = () => {

 let [ref,{width}] = useMeasure();
 const xTranslation = useMotionValue(0);
 useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
  
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 45,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  
    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className='border flex rounded-full p-1 bg-zinc-800 border-zinc-900 gap-2'>

      <span className='bg-zinc-900 flex gap-1 text-white rounded-full h-12 px-5 py-3'> NPS 
        <Image src={Level} width={18} height={18} alt='icon' />
      </span>

      {/* Container */}
      <div className='max-w-96 w-60 lg:w-80 relative overflow-hidden'>
        <div className='absolute w-6 top-0 left-0 h-full z-10 bg-gradient-to-r from-zinc-800 to-transparent'></div>
        <div className='absolute w-6 top-0 right-0  h-full z-10 bg-gradient-to-r from-transparent to-zinc-800'></div>
      <motion.div className='absolute mt-1 left-0 flex gap-4' ref={ref} style={{x: xTranslation}}>
      {[...reviews, ...reviews].map((review, index) => (
          <ReviewsList review={review} key={index} />
        ))}
      </motion.div>
      </div>
      {/* Button */}
      <button className="group relative overflow-hidden overflow-x-hidden rounded-full bg-neutral-950 px-5 py-3 text-neutral-50"><span className="relative flex gap-1 items-center z-10 group-hover:text-zinc-900">
        <p className='hidden xl:flex'>See all</p>
      <Plus  size={16} />
      </span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#E1FE03] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
    </div>
  )
}

export default ScoreBanner
