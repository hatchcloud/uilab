"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
            <div className="relative h-11 w-full min-w-[260px] mt-1">
              <input
                className="peer h-full w-full rounded-md border border-stone-600 bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
              </label>
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
