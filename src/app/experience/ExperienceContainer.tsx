import { DATA_EXP } from "./data";
import ExpContent from "./ui/ExpContent";

const dataExp = DATA_EXP;

export default function ExperienceContainer() {
  return (
    <div
      id="exp"
      className="mx-auto grid h-fit w-2/3 grid-cols-1 gap-5 border-t-4 border-black py-10 sm:mx-0 sm:w-full sm:grid-cols-2"
    >
      <div className="h-fit sm:sticky sm:top-24 sm:ml-auto">
        <h2 className="font-title text-4xl">Experience</h2>
      </div>
      <div className="flex w-full flex-col gap-2">
        {dataExp &&
          dataExp.map((exp, i) => <ExpContent key={i} experience={exp} />)}
      </div>
    </div>
  );
}
