import {
  FaLinkedin,
  FaSquareInstagram,
  FaGithub,
  FaSquareTwitter,
} from "react-icons/fa6";
import { SiStackblitz } from "react-icons/si";

export default function Footer() {
  return (
    <div className="flex h-fit justify-center bg-black">
      <div className="container grid grid-cols-1 text-zinc-800 lg:grid-cols-3">
        <a href="#" className="order-1 mx-auto lg:mx-0">
          <img
            src="/tigadika-logo-black.png"
            alt="tigadika logo"
            className="w-64"
          />
        </a>
        <div className="order-3 flex flex-col items-center justify-center lg:order-2">
          <p className="text-sm">Made with ❤️ by Radhea Amardika</p>
          <p className="text-xs">Bandung, West Java, Indonesia</p>
        </div>
        <div className="order-2 flex items-center justify-center gap-5 pb-20 lg:order-3 lg:justify-end lg:py-0">
          <a href="https://www.linkedin.com/in/radheafaradha/" target="_blank">
            <FaLinkedin className="text-3xl hover:text-purple-500" />
          </a>
          <a href="https://github.com/tigadika" target="_blank">
            <FaGithub className="text-3xl hover:text-purple-500" />
          </a>
          <a href="https://www.instagram.com/tigadika/" target="_blank">
            <FaSquareInstagram className="text-3xl hover:text-purple-500" />
          </a>
          <a href="https://x.com/tigadika" target="_blank">
            <FaSquareTwitter className="text-3xl hover:text-purple-500" />
          </a>
          <a href="https://stackblitz.com/@tigadika" target="_blank">
            <SiStackblitz className="text-3xl hover:text-purple-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
