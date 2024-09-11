"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
    //const isSkillRefInView = useInView(skillRef, {onec: true}, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div  
            className="h-full"
            initial={{y:"-200vh"}}
            animate={{y:"0%"}}
            transition={{ duration: 1}}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p className="text-lg">I am a Software Developer with over three years under my belt, passionate about crafting cool and efficient code. Well-versed in debugging, troubleshooting, and optimizing code to improve performance and reliability.</p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic"></span>
                        {/* BIOGRAPHY SIGN SVG */}
                        <div className="self-end">
                            {/* <motion.svg 
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            width="221" height="77" viewBox="0 0 221 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 75C21.1234 75 31.6756 60.7886 31 43.2222C30.5023 30.282 24 17.8057 24 5" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M25 8.00001C26.4397 7.82005 26.6544 5.27596 29 5.00001C30.1655 4.86289 33.3749 4.12508 34.5 3.50001C37.3286 1.92854 46.5789 2.00001 50 2.00001" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M48 35C34.8381 35 24.0904 39 11 39" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M49 55C49.1534 57.9155 51 76.3732 51 64.9444C51 54.4371 51.9819 46.035 54 35.9444C55.6377 27.7561 57.8771 25 66 25C69.061 25 76.6334 24.7332 78 22" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M78 48C82.3914 47.5121 93 44.6789 93 38.9444C93 34.3582 92.8967 30.1208 90 26.5C88.0668 24.0835 71.6608 32.8937 70.2222 36.7778C67.1996 44.9387 68.9622 67 81.4444 67C85.1335 67 85.7991 65.6453 88.2222 63.2222C91.2117 60.2327 91.1073 61 95 61" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M104 20C104 30.4805 101 40.5573 101 50.7778C101 53.2315 100.426 57.341 102.5 59C103.496 59.7967 108.419 62.8384 107 60" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M104 45C104.545 40.6372 115.943 36.2332 118.778 32.6111C120.004 31.0448 120.567 29.1234 121.778 27.7778C123.16 26.2416 125.101 24.8939 122 26.4445C119.156 27.8664 115.983 29.0056 113 30" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M105 44C109.684 44 117.865 47.0923 121.5 50C124.196 52.1565 126 57.6986 126 61" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M132 50C132.463 53.7005 145.23 54.863 148.444 53.9445C155.523 51.9221 153.684 37.9015 151.222 33.6667C146.168 24.9727 136.453 24.974 130.778 32.7778C127.277 37.5917 132.108 53.6637 136.222 57.7778C139.209 60.7647 151.118 66.763 154 61" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M159 64C161.877 64 164.245 63.6888 167 63" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M183 22C183 29.2464 186.858 36.3036 187 43.5556C187.034 45.291 189.402 55.2589 187.778 49.7778C186.735 46.26 185.7 40 181 40C179.183 40 172.642 42.5029 172.056 44.5556C170.416 50.295 175.456 69.9298 183 60.5C184.53 58.5879 186.367 54.097 186.944 51.5C187.264 50.0603 184.726 61.274 189 57" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M196 51C204.358 45.1187 204.746 41.7967 197.778 36.2222C194.538 33.6306 191 43.0077 191 45C191 49.5965 195.157 56.3723 198.222 59.7778C199.604 61.3136 201.421 61.4741 202.778 59.7778C204.791 57.2617 203.981 56.9953 208 58" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M206 43C208.697 48.5531 211.366 54.5295 213.056 60.4444C213.948 63.5688 213.907 52.682 214 51C214.147 48.3575 215.429 45.6564 217.5 44C219.526 42.3795 218 39.3902 218 37" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            </motion.svg> */}
                        </div>
                    </div>
                    {/* BIOGRAPHY SCROLL SVG */}
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                    {/* SKILL CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        <motion.h1 
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{delay: 0.2}}
                            className="font-bold text-2xl">
                                SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                            >
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Git and Github
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Typescript
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Gatsby
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                MongoDB
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SQL and NoSQL
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Redux
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Firebase
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Express.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                TDD
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Database Design
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Apollo
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Restful Api
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Prisma
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Zustand
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Websocket
                            </div>
                        </motion.div>
                        {/* SKILL scroll SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        <motion.h1 
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl">
                                EXPERIENCE
                        </motion.h1>
                        {/* EXPERINCE LIST */}
                        <motion.div 
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="">
                            {/* EXPERINCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 bg-red-200">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Tech Facilitator
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                    • Technology Integration: Ensure that clients can integrate new technologies into their workflow and guide them through the implementation process.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2022 - Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        GOMYCODE
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3"></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                {/* LINE */}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/* LINE CIRCLE */}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                {/* JOB TITLE */}
                                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                    Full-stack Developer
                                </div>
                                {/* JOB DESC */}
                                <div className="p-3 text-sm italic">
                                • Develop RESTful APIs to handle data requests, server-side logic and implement database interaction and wrote unit tests and integration tests.{" "}
                                </div>
                                {/* JOB DATE */}
                                <div className="p-3 text-red-400 text-sm font-semibold">
                                    2019 - 2021{" "}
                                </div>
                                {/* JOB COMPANY */}
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                    I & T SOFTWARE SOLUTION
                                </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                {/* JOB TITLE */}
                                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                Customer Support Representative{" "}
                                </div>
                                {/* JOB DESC */}
                                <div className="p-3 text-sm italic">
                                • Problem Resolution: I diagnose and troubleshoot customer issues, providing accurate and timely resolutions.{" "}
                                </div>
                                {/* JOB DATE */}
                                <div className="p-3 text-red-400 text-sm font-semibold">
                                    2018 - 2019{" "}
                                </div>
                                {/* JOB COMPANY */}
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                EFFADEX INVESTMENT
                                </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                {/* LINE */}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/* LINE CIRCLE */}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;