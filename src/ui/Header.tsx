import AsteriskSvg from "../assets/asterisk.svg";
import ReactSvg from "../assets/react-svgrepo-com.svg";
import NextSvg from "../assets/nextjs-fill-svgrepo-com.svg";
import TsSvg from "../assets/typescript-official-svgrepo-com.svg";
import Tailwind from "../assets/tailwind-svgrepo-com.svg";
import { ArrowDownRight } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="relative mx-auto grid h-screen w-5/6 grid-cols-2 pt-20">
        <div className="absolute right-[30%] top-[25%] h-[40rem] w-[40rem] animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-3xl filter ease-in-out"></div>
        <div className="animation-delay-2000 absolute right-[6%] top-[16%] h-[30rem] w-[30rem] animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-3xl filter ease-in-out"></div>
        <div className="animation-delay-4000 absolute right-[12%] top-[28%] h-[40rem] w-[40rem] animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-3xl filter ease-in-out"></div>
        <div className="flex flex-col items-start justify-center gap-10">
          <div className="space-y-3">
            <img src={AsteriskSvg} alt="" className="h-16 w-16" />
            <p className="font-mono text-xl">
              Hello, I'm <span style={{ fontWeight: 700 }}>Radhea</span>. I'm a
            </p>
            <h1 className="font-title text-[60px]">Web developer</h1>
            <p className="font-mono text-xl">
              Mainly Front End Developer, sometimes go Full Stack.
            </p>
            <p className="font-mono text-xl">A former Javascript Instructor.</p>
          </div>
          <button
            className={
              "flex cursor-pointer items-center gap-3 rounded-base border-2 border-black bg-lime-300 px-6 py-2 font-mono shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            }
          >
            <p>Check My Work</p>
            <ArrowDownRight />
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            src={ReactSvg}
            alt=""
            className="animation-delay-4000 absolute right-[10%] z-30 w-24 animate-updown"
          />
          <img
            src={NextSvg}
            alt=""
            className="animation-delay-2000 absolute right-[5%] top-[20%] z-30 w-24 animate-updown"
          />
          <img
            src={TsSvg}
            alt=""
            className="animation-delay-4000 absolute left-[10%] top-[20%] z-30 w-24 animate-updown"
          />
          <img
            src={Tailwind}
            alt=""
            className="animation-delay-2000 absolute bottom-[20%] left-[10%] z-30 w-24 animate-updown"
          />
          <div className="z-30 h-[30rem] w-[20rem] animate-updown overflow-hidden rounded-t-full border-4 border-black bg-rose-500">
            <img
              src="tigadika-photo.png"
              alt="tigadika photo"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
