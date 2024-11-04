import { cn } from "../lib/utils";

export default function Navbar() {
  return (
    <>
      <nav className="fixed z-40 flex h-20 w-full items-center justify-center border-b-4 border-black bg-lime-300 px-5 xl:px-0">
        <div className="container flex items-center justify-between">
          <a href="#header">
            <img
              src="/tigadika-logo-black.png"
              alt="tigadika logo"
              className="w-36"
            />
          </a>
          <ul className="hidden gap-8 font-mono tracking-tight sm:flex">
            <li>
              <a
                href="#project"
                className="hover:font-bold hover:text-rose-500"
              >
                Past Project
              </a>
            </li>
            <li>
              <a href="#exp" className="hover:font-bold hover:text-rose-500">
                Experience
              </a>
            </li>
          </ul>
          <a
            href="Radhea_Amardika_Resume_Fullstack.pdf"
            download
            className={cn(
              "flex cursor-pointer items-center rounded-base border-2 border-black bg-rose-500 px-6 py-2 font-mono shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none",
            )}
          >
            Download CV
          </a>
        </div>
      </nav>
    </>
  );
}
