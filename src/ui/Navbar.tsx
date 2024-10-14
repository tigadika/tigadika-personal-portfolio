import { cn } from "../lib/utils";

export default function Navbar() {
  return (
    <>
      <nav className="fixed z-40 flex h-20 w-full items-center justify-center border-b-4 border-black bg-lime-300">
        <div className="container flex items-center justify-between">
          <img
            src="/tigadika-logo-black.png"
            alt="tigadika logo"
            className="w-36"
          />
          <ul className="flex gap-8 font-mono tracking-tight">
            <li>
              <a href="" className="hover:font-bold hover:text-rose-500">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:font-bold hover:text-rose-500">
                Past Project
              </a>
            </li>
            <li>
              <a href="" className="hover:font-bold hover:text-rose-500">
                Experience
              </a>
            </li>
          </ul>
          <button
            className={cn(
              "rounded-base shadow-light hover:translate-x-boxShadowX hover:translate-y-boxShadowY flex cursor-pointer items-center border-2 border-black bg-rose-500 px-6 py-2 font-mono transition-all hover:shadow-none dark:hover:shadow-none",
            )}
          >
            Download CV
          </button>
        </div>
      </nav>
    </>
  );
}
