'use client'

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react";

const Card = () => {
    const [isHovered, setHovered] = useState(false);
    const [showExpanded, setShowExpanded] = useState(false);
    const imageSrc =
    "https://images.unsplash.com/photo-1487260211189-670c54da558d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <AnimatePresence>
        {showExpanded ? (
        <motion.div 
            initial={{ opacity: 0 }} 
            layoutId="card-indicator"
            whileInView={{ opacity: 1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setShowExpanded(false)}
            className=" rounded-3xl overflow-hidden border border-stone-200 bg-white hover:bg-stone-100 transition-colors duration-100 p-3 min-w-[300px] cursor-pointer md:max-w-[400px] w-full mx-6">
        {/* Image Section */}
        <motion.div layoutId="card-image" className={` relative overflow-hidden `}>
            <Image
            src={imageSrc }          
            width={450}
            height={600}
            alt="Image Example"
            className="w-full h-[300px] object-cover rounded-xl"
            />
            <motion.span 
                layoutId="badge"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute flex gap-2 items-center top-2 left-2 bg-stone-200/25 border border-stone-50 text-stone-600 text-xs font-semibold p-2 rounded-lg leading-none">
                <span className=" flex items-center justify-center w-3 h-3 rounded-full border-2 border-pink-300">
                    <span className=" flex w-1 h-1 rounded-full bg-pink-400">
                    </span>
                </span>
            Live Bootcamp
            </motion.span>
        </motion.div>
        {/* Text Content Section */}
        <motion.div layoutId="card-text-content"
            className="pt-4 w-fit ">
            <motion.h3 layoutId="card-title" className="text-lg font-semibold text-stone-800 leading-6">Storytelling</motion.h3>
            <motion.p layout className="text-sm font-medium text-stone-500 ">5 weeks · part-time</motion.p>
            <motion.span layout className={`inline-block mt-3 bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full ${
                isHovered ? "bg-purple-200" : ""
            }`}
            
            >
            New!
            </motion.span>
        </motion.div>
        <motion.p layout className=" pt-3 w-full  md:w-[400px] text-sm font-medium text-stone-500 ">We're grateful to have educated UX/UI Designers in 150+ countries and we're trusted by industry leading teams like Google, Figma, Revolut, and Shopify</motion.p>
        </motion.div>  
        ) : ( 
        <motion.div 
            initial={{ opacity: 0 }} 
            layoutId="card-indicator"
            whileInView={{ opacity: 1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setShowExpanded(true)}
            className="rounded-3xl overflow-hidden border border-stone-200 bg-white hover:bg-stone-100 transition-colors duration-100 p-3 min-w-[250px] max-w-[200px] cursor-pointer">
        {/* Image Section */}
        <motion.div layoutId="card-image" className="relative overflow-hidden">
            <motion.div 
                animate={{
                    opacity: isHovered ? 1 : 0, 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20, }}
                className=" opacity-0 absolute rounded-2xl w-full h-full bg-slate-400/35 text-neutral-100 z-10 flex items-center justify-center"> Explore </motion.div>
            <Image
            src={imageSrc }          
            width={250}
            height={300}
            alt="Image Example"
            className="w-full h-48 object-cover rounded-xl"
            />
            <motion.span 
            layoutId="badge"
                animate={{
                    y: isHovered ? -60 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute flex gap-2 items-center top-2 left-2 bg-stone-200/25 border border-stone-50 text-stone-600 text-xs font-semibold p-2 rounded-lg leading-none">
                <span className=" flex items-center justify-center w-3 h-3 rounded-full border-2 border-pink-300">
                    <span className=" flex w-1 h-1 rounded-full bg-pink-400">
                    </span>
                </span>
            Live Bootcamp
            </motion.span>
        </motion.div>
        {/* Text Content Section */}
        <motion.div 
            layoutId="card-text-content "
            className="pt-4 w-fit">
            <motion.h3 layoutId="card-title" className="text-lg font-semibold text-stone-800 leading-6">Storytelling</motion.h3>
            <motion.p layout className="text-sm font-medium text-stone-500 ">5 weeks · part-time</motion.p>
            <motion.span layout className={`inline-block mt-3 bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full ${
                isHovered ? "bg-purple-200" : ""
            }`}
            
            >
            New!
            </motion.span>
        </motion.div>
        </motion.div>  
        )}</AnimatePresence>
         </>
    )}


  



export default Card
