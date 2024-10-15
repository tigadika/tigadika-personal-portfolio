import { Experience } from "../data";

export default function ExpContent({ experience }: { experience: Experience }) {
  return (
    <div className="relative w-full lg:w-2/3 xl:w-1/2">
      <div className="absolute top-4 z-20 h-5 w-5 rounded-full bg-rose-500"></div>
      <div className="absolute left-2 top-6 h-full border-l-2 border-black"></div>
      <div className="space-y-3 py-2 pl-10">
        <div className="w-fit rounded-full bg-lime-300 px-4 py-2 font-mono text-sm">
          {experience.time}
        </div>
        <h3 className="font-mono text-lg" style={{ fontWeight: "700" }}>
          {experience.title}
        </h3>
        <p className="font-mono text-lg">{experience.company}</p>
        <p className="font-mono text-sm">{experience.description}</p>
      </div>
    </div>
  );
}
