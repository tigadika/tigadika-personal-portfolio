import { Group, Line, Shape, Text } from "react-konva";
import { PastProject } from "../data";

export default function FileShape({
  i,
  project,
  addOpenedProjects,
}: {
  i: number;
  project: PastProject;
  addOpenedProjects: (project: PastProject) => void;
}) {
  return (
    <Group
      draggable
      x={100}
      y={i * 150 + 20}
      onDblClick={() => {
        addOpenedProjects(project);
      }}
    >
      <Shape
        width={100}
        height={100}
        sceneFunc={function (context, shape) {
          const width = shape.width();
          const height = shape.height();
          context.beginPath();
          context.moveTo(30, 0);
          context.lineTo(width - 0, height - 100);
          context.lineTo(width - 0, height - 0);
          context.lineTo(width - 100, height - 0);
          context.lineTo(width - 100, height - 70);
          context.closePath();

          // (!) Konva specific method, it is very important
          context.fillStrokeShape(shape);
        }}
        fill="#7e42ff"
        stroke="black"
        strokeWidth={4}
      />
      <Line
        x={20}
        y={30}
        points={[0, 0, 60, 0]}
        stroke={"black"}
        strokeWidth={4}
        lineCap="round"
        lineJoin="round"
      />
      <Line
        x={20}
        y={40}
        points={[0, 0, 70, 0]}
        stroke={"black"}
        strokeWidth={4}
        lineCap="round"
        lineJoin="round"
      />
      <Line
        x={20}
        y={50}
        points={[0, 0, 60, 0]}
        stroke={"black"}
        strokeWidth={4}
        lineCap="round"
        lineJoin="round"
      />
      <Text
        text={project.name}
        y={110}
        align="center"
        fontSize={14}
        fontFamily="monospace"
      />
    </Group>
  );
}
