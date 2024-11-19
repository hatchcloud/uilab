"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react';

const ContactNav = () => {
  const [showExpanded, setShowExpanded] = useState(false);

  const variants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 2.5, 1],
      transition: {
        duration: 2,
        delay: 0.001,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {showExpanded ? (
          <motion.div 
            layoutId="form-container"
            className="flex flex-col gap-2 items-center justify-center top-2 left-2 bg-neutral-900 hover:bg-neutral-900/90 border border-stone-500 text-stone-200 text-md font-medium py-2 px-4 rounded-2xl leading-none">
            <div className=" gap-1 relative flex h-11 w-full min-w-[260px] mt-1">
            <Input type="email" placeholder="Email" />
            <button className=" bg-zinc-600 hover:bg-zinc-400 w-12 transition-colors duration-100 leading-none rounded-md flex items-center justify-center cursor-pointer">
            <Send color="white" size={16} className="mr-1" />
            </button>
            </div>
            <div className="w-full flex flex-col rounded-full overflow-hidden">
              <div className=" h-[1px] bg-neutral-100/30"></div>
              <div className=" h-[1px] bg-neutral-100/15"></div>
            </div>
            <motion.div 
              onClick={() => setShowExpanded(false)}
              layoutId="form-title"
              className="flex items-center gap-2 w-fit h-fit">
              <span className=" flex items-center justify-center w-3 h-3 rounded-full border-2 border-orange-300">
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={variants}
                  className=" flex w-1 h-1 rounded-full bg-orange-400"
                ></motion.span>
              </span>
              <span>Free Consultation </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            layoutId="form-container"
            onClick={() => setShowExpanded(true)}
            className="flex flex-col gap-2 items-center justify-center top-2 left-2 bg-neutral-900 hover:bg-neutral-900/90 border border-stone-500 text-stone-200 text-md font-medium py-2 px-4 rounded-full leading-none"
          >
            <div className="w-full hidden flex-col rounded-full overflow-hidden">
              <div className=" h-[1px] bg-neutral-100/30"></div>
              <div className=" h-[1px] bg-neutral-100/15"></div>
            </div>
            <motion.div layoutId="form-title"className="flex items-center gap-2  w-fit h-fit">
              <span className=" flex items-center justify-center w-3 h-3 rounded-full border-2 border-orange-300">
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={variants}
                  className=" flex w-1 h-1 rounded-full bg-orange-400"
                ></motion.span>
              </span>
              <span>Free Consultation </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactNav;
