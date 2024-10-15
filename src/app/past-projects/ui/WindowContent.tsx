import { Group, Rect, Text } from "react-konva";
import { Html } from "react-konva-utils";
import { PastProject } from "../data";

export default function WindowContent({
  dimension,
  project,
  closeOpenedProject,
}: {
  dimension: { width: number; height: number };
  project: PastProject;
  closeOpenedProject: () => void;
}) {
  return (
    <Group
      draggable
      x={Math.random() * (dimension.width / 4 + 200)}
      y={Math.random() * (dimension.height / 4)}
    >
      <Html groupProps={{ y: 50 }} divProps={{ style: { zIndex: 0 } }}>
        <div className="z-0 flex h-[500px] w-[770px] gap-3 border-x-2 border-b-2 border-black bg-white p-4">
          <img
            src={project.imgUrl}
            alt="project1"
            className="w-1/2 object-contain"
          />
          <div className="flex flex-col justify-between gap-4">
            <div className="h-2/3 overflow-y-scroll">
              <pre className="text-wrap text-xs">{project.description}</pre>
            </div>

            <div className="flex flex-wrap gap-1 text-xs">
              {project.tags &&
                project.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="rounded-base border border-black bg-rose-500 px-2 py-1"
                  >
                    {tag}
                  </div>
                ))}
            </div>

            <a
              href={project.links}
              target="_blank"
              className="flex cursor-pointer items-center justify-center gap-3 rounded-base border-2 border-black bg-lime-300 px-2 py-1 font-mono shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              Visit
            </a>
          </div>
        </div>
      </Html>
      <Html groupProps={{ x: 768 - 40, y: 4 }}>
        <button
          onClick={closeOpenedProject}
          className="flex cursor-pointer items-center gap-3 border-2 border-black bg-lime-300 px-2 py-1 font-mono shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
        >
          X
        </button>
      </Html>
      <Rect width={768} height={50} x={1} fill="#f43f5e" stroke={"4"} />
      <Text
        text={project.name}
        fontFamily="monospace"
        fontSize={20}
        x={10}
        y={15}
      ></Text>
    </Group>
  );
}
