import { LuMail } from "react-icons/lu";

export default function CtaFooter() {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center gap-10 border-b-4 border-black bg-violet-500 px-10 lg:px-0">
      <div className="space-y-3 text-center">
        <h2 className="font-title text-4xl">Ready to build</h2>
        <h2 className="font-title text-3xl">something incredible together?</h2>
      </div>
      <a
        href="mailto:amardika.noor@gmail.com"
        target="_blank"
        className="flex cursor-pointer items-center justify-center gap-3 rounded-base border-2 border-black bg-lime-300 px-6 py-4 font-mono shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        <LuMail />
        <p>I'm just an email away</p>
      </a>
    </div>
  );
}
