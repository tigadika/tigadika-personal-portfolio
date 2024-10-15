import { DATA_EXP } from "./data";
import ExpContent from "./ui/ExpContent";

const dataExp = DATA_EXP;

export default function ExperienceContainer() {
  return (
    <div className="grid h-fit w-full grid-cols-2 gap-5 border-t-4 border-black py-10">
      <div className="sticky top-24 ml-auto h-fit">
        <h2 className="font-title text-4xl">Experience</h2>
      </div>
      <div className="flex w-full flex-col gap-2">
        {dataExp &&
          dataExp.map((exp, i) => <ExpContent key={i} experience={exp} />)}
      </div>
    </div>
  );
}
