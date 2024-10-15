import { Group, Rect, Text } from "react-konva";
import { Html } from "react-konva-utils";
import { PastProject } from "../data";

export default function WindowContentMobile({
  dimension,
  project,
  closeOpenedProjectMobile,
}: {
  dimension: { width: number; height: number };
  project: PastProject;
  closeOpenedProjectMobile: () => void;
}) {
  return (
    <Group
      draggable
      x={Math.random() * (dimension.width / 4 + 200)}
      y={Math.random() * (dimension.height / 4)}
    >
      <Html groupProps={{ y: 50 }} divProps={{ style: { zIndex: 0 } }}>
        <div className="z-0 h-[520px] w-[370px] flex-col justify-center gap-3 border-x-2 border-b-2 border-black bg-white p-4">
          <img
            src={project.imgUrl}
            alt="project1"
            className="mx-auto w-44 object-contain"
          />
          <div className="flex flex-col justify-between gap-4">
            <div className="h-48 overflow-y-scroll">
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
      <Html groupProps={{ x: 368 - 40, y: 4 }}>
        <button
          onClick={closeOpenedProjectMobile}
          className="flex cursor-pointer items-center gap-3 border-2 border-black bg-lime-300 px-2 py-1 font-mono shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
        >
          X
        </button>
      </Html>
      <Rect width={368} height={50} x={1} fill="#f43f5e" stroke={"4"} />
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
