import { LuMail } from "react-icons/lu";
import CTAButton from "./CTAButton";

export default function CtaFooter() {
  return (
    <div className="relative flex h-[50vh] flex-col items-center justify-center gap-10 overflow-hidden px-10 lg:px-0">
      <div className="absolute top-24 h-[20rem] w-[30rem] -translate-x-1/3 rounded-full bg-purple-500 opacity-30 blur-3xl filter"></div>
      <div className="absolute top-24 h-[20rem] w-[30rem] translate-x-1/3 rounded-full bg-cyan-500 opacity-30 blur-3xl filter"></div>

      <div className="space-y-3 bg-gradient-to-b from-cyan-500 to-purple-500 bg-clip-text text-center text-transparent">
        <h2 className="text-4xl font-bold">Ready to build</h2>
        <h2 className="text-3xl font-bold">something incredible together?</h2>
      </div>
      <CTAButton
        link="mailto:amardika.noor@gmail.com"
        className="hover:drop-shadow-[0_0_70px_rgba(229,53,171,1)]"
      >
        <LuMail />
        <p>I'm just an email away</p>
      </CTAButton>
    </div>
  );
}
