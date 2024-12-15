import AsteriskSvg from "../assets/asterisk.svg";
import ReactSvg from "../assets/react-svgrepo-com.svg";
import NextSvg from "../assets/nextjs-fill-svgrepo-com.svg";
import TsSvg from "../assets/typescript-official-svgrepo-com.svg";
import Tailwind from "../assets/tailwind-svgrepo-com.svg";
import { LuArrowDownRight } from "react-icons/lu";
import { motion, useMotionValue, useTransform } from "motion/react";
import { FaGithub } from "react-icons/fa6";

export default function Header() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-500, 500], [20, -20]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-500, 500], [-25, 25]); // Adjusted rotation values

  const handleMouseMove = (event: any) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };
  return (
    <>
      <div className="relative flex h-full w-full flex-col px-5 pt-20 lg:mx-auto lg:h-screen lg:w-5/6">
        <div className="absolute right-[38%] top-[25%] h-[20rem] w-[20rem] animate-blob rounded-full bg-teal-500 opacity-30 blur-3xl filter ease-in-out md:right-[30%] md:h-[40rem] md:w-[40rem]"></div>
        <div className="animation-delay-4000 absolute right-[50%] top-[28%] h-[20rem] w-[20rem] animate-blob rounded-full bg-purple-600 opacity-30 blur-3xl filter ease-in-out md:right-[12%] md:h-[40rem] md:w-[40rem]"></div>
        <div className="animation-delay-2000 absolute right-[38%] top-[16%] h-[10rem] w-[10rem] animate-blob rounded-full bg-indigo-600 opacity-30 blur-3xl filter ease-in-out md:right-[6%] md:h-[30rem] md:w-[30rem]"></div>
        <motion.div
          style={{
            perspective: 800,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50rem",
            width: "100%",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="z-40 flex w-full flex-col items-center gap-10 text-center">
            <div className="bg-gradient-to-b from-zinc-50 to-zinc-500 bg-clip-text text-transparent">
              <h2 className="text-[2rem] font-medium">Hello, I'm tigadika</h2>
              <h3 className="mt-[1rem] text-[4rem] font-semibold leading-none">
                I'm a Web Developer
              </h3>
              <p className="mt-[2rem] text-pretty text-2xl">
                Most of the time i'm a frontend developer,
                <br /> but sometimes i go fullstack too.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="group relative rounded-md border-b border-t border-b-purple-800 border-t-gray-400 bg-gradient-to-br from-teal-500 via-purple-700 to-purple-600 px-4 py-2 text-sm font-semibold text-gray-200 transition duration-500 ease-in-out hover:-translate-y-1">
                <div className="absolute left-0 top-0 h-full w-full rounded-md bg-gradient-to-b from-zinc-50 to-transparent opacity-30 group-hover:opacity-40"></div>
                Know me more
              </button>
              <a
                href="https://github.com/tigadika"
                target="_blank"
                className="flex items-center gap-2 rounded-md border border-zinc-500 px-4 py-2 text-sm font-semibold text-gray-200 transition duration-500 ease-in-out hover:-translate-y-1 hover:border-zinc-400"
              >
                <FaGithub />
                Github
              </a>
            </div>

            {/* this div can be used as the 'dotted grid' */}
            <motion.div
              style={{
                marginTop: "5rem",
                width: "auto",
                height: "auto",
                transformStyle: "preserve-3d",
                perspective: 800,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                rotateX,
                rotateY,
              }}
              transition={{ velocity: 0 }}
            >
              <motion.div
                key="card"
                style={{
                  boxShadow: "0px 0px 50px -5px rgba(0,0,0,0.45)",
                  borderRadius: 10,
                  width: 150,
                  height: 150,
                  transformStyle: "preserve-3d",
                  perspective: 800,
                  rotateX: cardRotateX,
                  rotateY: cardRotateY,
                }}
                transition={{ velocity: 0 }}
              >
                <div className="relative h-full overflow-hidden rounded-md bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 p-2 opacity-60 backdrop-blur-md">
                  <div className="absolute h-[200px] w-[30px] -translate-x-[80px] -translate-y-[50px] rotate-[25deg] animate-shine bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-100 opacity-30 blur-xl"></div>
                  <div className="h-full w-full rounded-md bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-800 p-7">
                    <img
                      src="/tigadika-logo.png"
                      alt=""
                      className="grayscale"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
