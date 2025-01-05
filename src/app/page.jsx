"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <div className=" h-2/5 lg:h-full lg:w-1/2 relative">
            <Image src='/hero.png' alt="" fill className="object-contain"/>
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-5xl font-bold hidden sm:block">Where Innovation Meets Precision in Every Line of Code.</h1>
          {/* Description */}
          <p className="md:text-xl"><span className="font-normal">Hi, I’m Ndifreke — Full Stack Developer</span> <br />
          I craft elegant, high-performance web solutions designed to elevate your vision. From seamless user experiences to robust backend systems, I specialize in turning ideas into scalable, functional realities. Let’s collaborate to create impactful applications and build the future, one line of code at a time.</p>
          {/* Button */}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring ring-black bg-black text-white"> <Link href="./portfolio">View My Work</Link></button>
            <button className="p-4 rounded-lg ring ring-black "><Link href="./contact">Contact Me</Link></button>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
