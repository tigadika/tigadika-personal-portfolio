import { ReactNode } from "react";
import { cn } from "../lib/utils";

export default function CTAButton({
  children,
  link,
  className,
}: {
  children: ReactNode;
  link: string;
  className?: string;
}) {
  return (
    <a
      href={link}
      className={cn(
        "group relative rounded-md border-b border-t border-b-purple-800 border-t-gray-400 bg-gradient-to-br from-teal-500 via-purple-700 to-purple-600 px-4 py-2 text-sm font-semibold text-gray-200 transition duration-500 ease-in-out hover:-translate-y-1",
        className,
      )}
    >
      <div className="absolute left-0 top-0 h-full w-full rounded-md bg-gradient-to-b from-zinc-50 to-transparent opacity-30 group-hover:opacity-40"></div>
      <div className="flex items-center gap-2">{children}</div>
    </a>
  );
}
