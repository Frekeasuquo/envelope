"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "OAPP",
        desc: "Discover the easiest way to satisfy your pizza cravings with OAPP. Customize and order your favorite pizzas with just a few taps on their smartphone or tablet. Users can browse through a variety of pizza options, select toppings, crust types, and sizes, and even add sides and drinks to their order",
        img: "https://img.freepik.com/premium-vector/ecommerce-concept-order-food-online-website-fast-food-pizza-delivery-online-service-flat-isometric-vector-illustration-can-be-used-advertisement-infographic-game-mobile-apps-icon_589019-4684.jpg?w=1800",
        link: "https://arami.vercel.app/",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "E-commerce App",
        desc: "YourMarket is a state-of-the-art e-commerce application designed to deliver a seamless and immersive shopping experience. Developed using a powerful stack comprising React, Redux, Hooks, GraphQL, Firebase, and Stripe for payment, this application redefines the way users interact with online marketplaces.",
        img: "https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8432.jpg?w=740&t=st=1700043963~exp=1700044563~hmac=3e049b71b87237cdc2b60cbd97e3a65b054ae2965edbc02724f0c5243c3875f7",
        link: "https://mellow-halva-5b4284.netlify.app/",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "ShareHub",
        desc: "ShareHub is more than just a sharing application; it's a dynamic hub of connectivity and collaboration, uniting individuals and teams in a shared digital space. It redefines the way we collaborate, share ideas, and innovate together.",
        img: "https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5432.jpg?w=740&t=st=1700044669~exp=1700045269~hmac=b9ab867d0325487aeadc6ea793cd217c45bb784a3c24e1721deb2c312d12718a",
        link: "https://share-7p1383hxk-frekeasuquo.vercel.app/",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "LoanApp Dashboard",
        desc: "A sophisticated loan application designed to empower individuals with a seamless, secure, and efficient borrowing experience. With a commitment to financial inclusivity and cutting-edge technology, LoanApp stands as your trusted partner on the journey to achieving your financial goals.",
        img: "https://img.freepik.com/free-vector/mobile-banking-concept-illustration_114360-17348.jpg?w=740&t=st=1700044812~exp=1700045412~hmac=7c07996701be2c6f60c6c5d2264f8859b55dbfd18cb0c8a506f742c8d770bea9",
        link: "https://boctrust-r3whv8m5x-frekeasuquo.vercel.app/",
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                            {items.map((item) => (
                                <div
                                    className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                    key={item.id}
                                >
                                    <div className="flex flex-col gap-8 text-white">
                                        <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                            {item.title}
                                        </h1>
                                        <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                            <Image className="rounded-xl" src={item.img} alt="" fill />
                                        </div>
                                        <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] ">
                                            {item.desc}
                                        </p>
                                        <Link href={item.link} className="flex justify-end" target="_blank" rel="noopener noreferrer">
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded-lg" >See Demo</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-6xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                        <path
                            id="circlePath"
                            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                        />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Full-Stack Developer.
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;