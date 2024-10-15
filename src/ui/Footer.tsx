import {
  FaLinkedin,
  FaSquareInstagram,
  FaGithub,
  FaSquareTwitter,
} from "react-icons/fa6";
import { SiStackblitz } from "react-icons/si";

export default function Footer() {
  return (
    <div className="flex h-fit justify-center bg-lime-300">
      <div className="container grid grid-cols-1 lg:grid-cols-3">
        <a href="#header" className="mx-auto lg:mx-0">
          <img
            src="/tigadika-logo-black.png"
            alt="tigadika logo"
            className="w-64"
          />
        </a>
        <div className="flex flex-col items-center justify-center">
          <p className="font-mono text-sm">Made with ❤️ by Radhea Amardika</p>
          <p className="font-mono text-xs">Bandung, West Java, Indonesia</p>
        </div>
        <div className="flex items-center justify-center gap-5 py-10 lg:justify-end lg:py-0">
          <a href="https://www.linkedin.com/in/radheafaradha/" target="_blank">
            <FaLinkedin className="text-3xl hover:text-rose-500" />
          </a>
          <a href="https://github.com/tigadika" target="_blank">
            <FaGithub className="text-3xl hover:text-rose-500" />
          </a>
          <a href="https://www.instagram.com/tigadika/" target="_blank">
            <FaSquareInstagram className="text-3xl hover:text-rose-500" />
          </a>
          <a href="https://x.com/tigadika" target="_blank">
            <FaSquareTwitter className="text-3xl hover:text-rose-500" />
          </a>
          <a href="https://stackblitz.com/@tigadika" target="_blank">
            <SiStackblitz className="text-3xl hover:text-rose-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
