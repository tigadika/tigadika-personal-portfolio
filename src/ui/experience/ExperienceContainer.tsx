import { DATA_EXP } from "./data";
import ExpContent from "./ui/ExpContent";

const dataExp = DATA_EXP;

export default function ExperienceContainer() {
  return (
    <div
      id="exp"
      className="mx-auto grid h-fit w-2/3 grid-cols-1 gap-5 py-10 sm:mx-0 sm:w-full sm:grid-cols-2"
    >
      <div className="h-fit sm:sticky sm:top-24 sm:ml-auto">
        <div className="w-fit bg-gradient-to-r from-zinc-300 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(179,116,240,0.5)]">
          <h2 className="text-pretty text-center text-[2.5rem] font-semibold tracking-tight">
            Experience
          </h2>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        {dataExp &&
          dataExp.map((exp, i) => <ExpContent key={i} experience={exp} />)}
      </div>
    </div>
  );
}
