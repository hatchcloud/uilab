"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Send , CircleCheckBig, CircleAlert, ArrowLeft} from 'lucide-react';

const ContactNav = () => {
  const [showExpanded, setShowExpanded] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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

  const validateEmail = (emailInput) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      setError("Please enter a valid email address");
      return false; // Return false if invalid
    } else {
      setError("");
      return true; // Return true if valid
    }
  }

  const handleButtonClick = () => {
    if (validateEmail(email)) {
      setShowSuccess(false); // Collapse the expanded form
      console.log("Email is valid and form is submitted!");
    } else { // Ensure success is false if invalid
      console.log("Invalid email, cannot proceed.");
    }
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <>
      <AnimatePresence>
        {showExpanded  ? (
          <div>
          {showSuccess ? (
          <motion.div 
            layoutId="form-container"
            className="flex flex-col gap-2 items-center justify-center top-2 left-2 bg-neutral-900 hover:bg-neutral-900/90 border border-stone-500 text-stone-200 text-md font-medium py-2 px-4 rounded-2xl leading-none">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 relative h-11 w-full min-w-[260px] mt-1">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlur}
                  className="w-full"
                />
                <button
                  onClick={handleButtonClick}
                  className="h-full bg-gradient-to-b from-[#575757] to-[#363636] shadow-inner hover:from-[#474747] w-12 transition-colors duration-100 leading-none rounded-md flex items-center justify-center cursor-pointer"
                >
                  <Send color="white" size={16} className="mr-1" />
                </button>
              </div>
              {error && 
              <motion.div layout className=" flex gap-1 mt-2 text-red-300 items-center justify-center ">
                <CircleAlert  size={16} className="mr-1" />
                <motion.p layout className="text-xs">{error}</motion.p>
              </motion.div>}
              
            </div>
            <div className="w-full flex flex-col rounded-full overflow-hidden">
              <div className=" h-[1px] bg-neutral-100/30"></div>
              <div className=" h-[1px] bg-neutral-100/15"></div>
            </div>
            <motion.div 
              onClick={() => setShowExpanded(false)}
              layoutId="form-title"
              className="flex items-center gap-2 w-fit h-fit cursor-pointer">
                <ArrowLeft  size={16} className="mr-1" />
              <span className=" hidden items-center justify-center w-3 h-3 rounded-full border-2 border-orange-300">
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
            className="flex flex-col gap-2 items-center justify-center top-2 left-2 bg-green-200 border border-green-500 text-green-700 text-md font-medium py-4 px-4 rounded-2xl leading-none">
            <div className=" hidden gap-1 relative h-11 w-full min-w-[260px] mt-1">
            <Input type="email" placeholder="Email" />
            <button className=" bg-zinc-600 hover:bg-zinc-400 w-12 transition-colors duration-100 leading-none rounded-md flex items-center justify-center cursor-pointer">
            <Send color="white" size={16} className="mr-1" />
            </button>
            </div>
            <div className="w-full hidden flex-col rounded-full overflow-hidden">
              <div className=" h-[1px] bg-neutral-100/30"></div>
              <div className=" h-[1px] bg-neutral-100/15"></div>
            </div>
            <motion.div 
              onClick={() => {
                setShowExpanded(false);
                setShowSuccess(false);
              }}
              layoutId="form-title"
              className="flex items-center gap-2 w-fit h-fit">
              <span className=" hidden items-center justify-center w-3 h-3 rounded-full border-2 border-orange-300">
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={variants}
                  className=" flex w-1 h-1 rounded-full bg-orange-400"
                ></motion.span>
              </span>
              <span>We will contact you soon!</span>
              <CircleCheckBig  size={16} className="mr-1" />
             
            </motion.div>
          </motion.div>
          )}
          </div>     


        ) : (
          <motion.div
            layoutId="form-container"
            onClick={() => {
              setShowExpanded(true);
              setShowSuccess(true);
              setEmail("");
              setError("");
            }}
            className="flex flex-col cursor-pointer gap-2 items-center justify-center top-2 left-2 bg-neutral-900 hover:bg-neutral-900/90 border border-stone-500 text-stone-200 text-md font-medium py-4 px-4 rounded-full leading-none"
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
