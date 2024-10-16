import AsteriskSvg from "../assets/asterisk.svg";
import ReactSvg from "../assets/react-svgrepo-com.svg";
import NextSvg from "../assets/nextjs-fill-svgrepo-com.svg";
import TsSvg from "../assets/typescript-official-svgrepo-com.svg";
import Tailwind from "../assets/tailwind-svgrepo-com.svg";
import { LuArrowDownRight } from "react-icons/lu";

export default function Header() {
  return (
    <>
      <div
        id="header"
        className="relative flex h-fit w-full flex-col px-5 pt-20 lg:mx-auto lg:h-screen lg:w-5/6 lg:flex-row"
      >
        <div className="absolute right-[30%] top-[25%] h-[40rem] w-[40rem] animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-3xl filter ease-in-out"></div>
        <div className="animation-delay-2000 absolute right-[6%] top-[16%] h-[30rem] w-[30rem] animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-3xl filter ease-in-out"></div>
        <div className="animation-delay-4000 absolute right-[12%] top-[28%] h-[40rem] w-[40rem] animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-3xl filter ease-in-out"></div>
        <div className="my-20 flex flex-col items-center justify-center gap-10 lg:my-0 lg:items-start">
          <div className="space-y-3 text-center lg:text-start">
            <img
              src={AsteriskSvg}
              alt=""
              className="hidden h-16 w-16 lg:block"
            />
            <p className="font-mono text-lg lg:text-xl">
              Hello, I'm <span style={{ fontWeight: 700 }}>Radhea</span>. I'm a
            </p>
            <h1 className="font-title text-5xl lg:text-[60px]">
              Web developer
            </h1>
            <p className="font-mono text-lg lg:text-xl">
              Mainly Front End Developer, sometimes go Full Stack.
            </p>
            <p className="font-mono text-lg lg:text-xl">
              A former Javascript Instructor.
            </p>
          </div>
          <a
            href="#project"
            className={
              "z-30 flex cursor-pointer items-center gap-3 rounded-base border-2 border-black bg-lime-300 px-6 py-2 font-mono shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            }
          >
            <p>Check My Work</p>
            <LuArrowDownRight className="text-2xl" />
          </a>
        </div>
        <div className="relative flex w-full items-center justify-center py-10 lg:w-1/2 lg:py-0">
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
          <div className="z-20 h-[30rem] w-[20rem] animate-updown overflow-hidden rounded-t-full border-4 border-black bg-rose-500">
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
