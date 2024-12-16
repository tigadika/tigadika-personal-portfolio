import { FaDownload, FaLaptop, FaWebAwesome } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <div className="fixed bottom-10 left-1/2 z-40 flex w-auto -translate-x-1/2 items-center justify-between rounded-full bg-zinc-900/50 px-6 py-4 text-sm text-zinc-300 shadow-xl backdrop-blur-md md:bottom-auto md:top-10 md:w-2/4">
        <div className="hidden items-center gap-2 md:flex">
          <img src="/tigadika-logo.png" alt="" className="h-4" />
          <h1 className="font-bold text-zinc-300">tigadika</h1>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#exp"
            className="flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 hover:bg-zinc-600"
          >
            <FaWebAwesome />
            Exp
          </a>
          <a
            href="#projects"
            className="flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 hover:bg-zinc-600"
          >
            <FaLaptop />
            Projects
          </a>
        </div>
        <a
          href="/Radhea_Amardika_Resume_Fullstack.pdf"
          download
          className="flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 hover:bg-zinc-600"
        >
          <FaDownload />
          Resume
        </a>
      </div>
    </>
  );
}
