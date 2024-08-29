"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div  
      className="h-full"
      initial={{y:"-200vh"}}
      animate={{y:"0%"}}
      transition={{ duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src='/hero.png' alt="" fill className="object-contain"/>
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-5xl font-bold">Where Innovation Meets Precision in Every Line of Code.</h1>
          {/* Description */}
          <p className="md:text-xl">I specialize in creating elegant, high-performance solutions tailored to your needs. Whether it’s building seamless user experiences or developing robust backend systems, I’m dedicated to transforming your vision into functional, scalable applications. Let’s build the future together, one line of code at a time.</p>
          {/* Button */}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring ring-black bg-black text-white">View My Work</button>
            <button className="p-4 rounded-lg ring ring-black ">Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
