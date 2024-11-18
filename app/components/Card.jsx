'use client'

import Image from "next/image";
import { motion } from "motion/react"
import { useState } from "react";

const Card = () => {
    const [isHovered, setHovered] = useState(false);
    const imageSrc =
    "https://images.unsplash.com/photo-1487260211189-670c54da558d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-sm rounded-3xl overflow-hidden border border-stone-200 bg-white hover:bg-stone-100 transition-colors duration-100 p-3 min-w-[250px] cursor-pointer">
      {/* Image Section */}
      <div className="relative overflow-hidden">

        <motion.div 
            animate={{
                opacity: isHovered ? 1 : 0, 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20, }}
            className="absolute rounded-2xl w-full h-full bg-slate-400/35 text-neutral-100 z-10 flex items-center justify-center"> Explorar </motion.div>
        <Image
          src={imageSrc }          
          width={250}
          height={300}
          alt="Image Example"
          className="w-full h-48 object-cover rounded-xl"
        />
        <motion.span 
            animate={{
                y: isHovered ? -40 : 0, // Move up if hovered
              }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute flex gap-2 items-center top-2 left-2 bg-stone-200/25 border border-stone-50 text-stone-600 text-xs font-semibold p-2 rounded-lg leading-none">
            <span className=" flex items-center justify-center w-3 h-3 rounded-full border-2 border-pink-300">
                <span className=" flex w-1 h-1 rounded-full bg-pink-400">
                </span>
            </span>
          Live Bootcamp
        </motion.span>
      </div>
      {/* Text Content Section */}
      <div className="pt-4">
        <h3 className="text-lg font-semibold text-stone-800 leading-6">Storytelling</h3>
        <p className="text-sm font-medium text-stone-500 ">5 weeks · part-time</p>
        <span className={`inline-block mt-3 bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full ${
            isHovered ? "bg-purple-200" : ""
        }`}
        
        >
          New!
        </span>
      </div>
    </motion.div>
  );
};


export default Card
