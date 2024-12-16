import { Experience } from "../data";

export default function ExpContent({ experience }: { experience: Experience }) {
  return (
    <div className="relative w-full lg:w-2/3 xl:w-1/2">
      <div className="absolute top-4 z-20 h-5 w-5 rounded-full bg-zinc-400"></div>
      <div className="absolute left-2 top-6 h-full border-l-2 border-zinc-600"></div>
      <div className="space-y-2 py-2 pl-10">
        <div className="w-fit rounded-full bg-gradient-to-br from-emerald-500 to-purple-500 px-4 py-2 text-sm text-zinc-200">
          {experience.time}
        </div>
        <h3 className="text-md font-semibold text-purple-400">
          {experience.title}
        </h3>
        <p className="text-lg font-bold text-zinc-400">{experience.company}</p>
        <p className="text-sm text-zinc-400">{experience.description}</p>
      </div>
    </div>
  );
}
