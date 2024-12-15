import Navbar from "./ui/Navbar";
import Header from "./ui/Header";
import { ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

function App() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <>
      <Navbar />
      <Header />
      <div className="h-screen">
        <div className="flex flex-col items-center justify-start py-28">
          <h2
            ref={container}
            className="z-30 text-[2rem] font-medium tracking-tight text-zinc-300"
          >
            {"Tech Stack I Use on a Daily Basis"
              .split(" ")
              .map((word, i, arr) => {
                const start = i / arr.length;
                const end = start + 1 / arr.length;
                return (
                  <Words
                    key={i}
                    progress={scrollYProgress}
                    range={[start, end]}
                  >
                    {word}
                  </Words>
                );
              })}
          </h2>
          {/* <div className="mask-transparent relative h-96 w-full bg-zinc-900 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-purple-900 before:to-transparent">
            test
          </div> */}
          <div className="mask-transparent bg-zinc-920 relative mt-10 h-96 w-full">
            <div className="h-full">Your content goes here</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function Words({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-2 text-center">
      <span className="absolute text-center opacity-20">{children}</span>
      <motion.span className="text-center" style={{ opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
}
