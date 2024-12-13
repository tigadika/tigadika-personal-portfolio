import { motion, useMotionValue, useTransform } from "motion/react";
import { FaDownload, FaGithub, FaLaptop, FaWebAwesome } from "react-icons/fa6";

function App() {
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
      <div className="-translate-x-1/2 shadow-xl fixed bottom-10 left-1/2 z-40 flex w-auto items-center justify-between rounded-full bg-zinc-900/50 px-6 py-4 text-sm text-zinc-300 backdrop-blur-md md:bottom-auto md:top-10 md:w-2/4">
        <div className="hidden items-center gap-2 md:flex">
          <img src="/tigadika-logo.png" alt="" className="h-4" />
          <h1 className="font-bold text-zinc-300">tigadika</h1>
        </div>
        <div className="flex items-center gap-2">
          <a
            href=""
            className="rounded-md flex items-center gap-1 border border-zinc-700 px-2 py-1 hover:bg-zinc-600"
          >
            <FaWebAwesome />
            Exp
          </a>
          <a
            href=""
            className="rounded-md flex items-center gap-1 border border-zinc-700 px-2 py-1 hover:bg-zinc-600"
          >
            <FaLaptop />
            Projects
          </a>
        </div>
        <a
          href=""
          className="rounded-md flex items-center gap-1 border border-zinc-700 px-2 py-1 hover:bg-zinc-600"
        >
          <FaDownload />
          Resume
        </a>
      </div>
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
              <h2 className="font-medium text-[2rem]">Hello, I'm tigadika</h2>
              <h3 className="font-semibold mt-[1rem] text-[4rem] leading-none">
                I'm a Web Developer
              </h3>
              <p className="mt-[2rem] text-pretty text-2xl">
                Most of the time i'm a frontend developer,
                <br /> but sometimes i go fullstack too.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="hover:-translate-y-1 rounded-md font-semibold group relative border-b border-t border-b-purple-800 border-t-gray-400 bg-gradient-to-br from-teal-500 via-purple-700 to-purple-600 px-4 py-2 text-sm text-gray-200 transition duration-500 ease-in-out">
                <div className="rounded-md absolute left-0 top-0 h-full w-full bg-gradient-to-b from-zinc-50 to-transparent opacity-30 group-hover:opacity-40"></div>
                Know me more
              </button>
              <a
                href="https://github.com/tigadika"
                target="_blank"
                className="hover:-translate-y-1 rounded-md font-semibold flex items-center gap-2 border border-zinc-500 px-4 py-2 text-sm text-gray-200 transition duration-500 ease-in-out hover:border-zinc-400"
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
                <div className="rounded-md relative h-full overflow-hidden bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 p-2 opacity-60 backdrop-blur-md">
                  <div className="animate-shine absolute h-[200px] w-[30px] -translate-x-[80px] -translate-y-[50px] rotate-[25deg] bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-100 opacity-30 blur-xl"></div>
                  <div className="rounded-md h-full w-full bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-800 p-7">
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

export default App;
