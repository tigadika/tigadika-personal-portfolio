import { useEffect, useRef, useState } from "react";
import {
  Stage,
  Layer,
  Star,
  Text,
  Shape,
  Group,
  Line,
  Rect,
} from "react-konva";
import { Html } from "react-konva-utils";
import FileShape from "./ui/FileShape";
import { PAST_PROJECTS, PastProject as PastProjectType } from "./data";
import WindowContent from "./ui/WindowContent";
import Konva from "konva";
import WindowContentMobile from "./ui/WindowContentMobile";

const dataProjects = PAST_PROJECTS;

const PastProject = ({
  dimension,
}: {
  dimension: { width: number; height: number };
}) => {
  const [openedProject, setOpenedProject] = useState<PastProjectType | null>(
    null,
  );
  const [openedProjectMobile, setOpenedProjectMobile] =
    useState<PastProjectType | null>(null);

  const addOpenedProjects = (project: PastProjectType) => {
    setOpenedProject(project);
  };
  const closeOpenedProject = () => {
    setOpenedProject(null);
  };
  const addOpenedProjectsMobile = (project: PastProjectType) => {
    setOpenedProjectMobile(project);
  };
  const closeOpenedProjectMobile = () => {
    setOpenedProjectMobile(null);
  };

  return (
    <Stage width={dimension.width} height={dimension.height}>
      <Layer>
        {dataProjects &&
          dataProjects.map((project, i) => (
            <FileShape
              key={project.id}
              i={i}
              project={project}
              addOpenedProjects={addOpenedProjects}
              addOpenedProjectsMobile={addOpenedProjectsMobile}
              closeOpenedProject={closeOpenedProject}
              closeOpenedProjectMobile={closeOpenedProjectMobile}
            />
          ))}
        <Group
          x={dimension.width - 150}
          y={dimension.height - 200}
          draggable
          onDblClick={() => {
            window.open("https://github.com/tigadika", "_blank");
          }}
          onTouchEnd={() => {
            window.open("https://github.com/tigadika", "_blank");
          }}
        >
          <Star
            width={100}
            height={100}
            innerRadius={30}
            outerRadius={60}
            fill={"#bef264"}
            numPoints={5}
            stroke={"black"}
            strokeWidth={4}
          />
          <Text
            x={-50}
            y={65}
            text="My github page"
            align="center"
            fontFamily="monospace"
            fontSize={14}
          />
        </Group>
        {openedProject && (
          <WindowContent
            dimension={dimension}
            project={openedProject}
            closeOpenedProject={closeOpenedProject}
          />
        )}
        {openedProjectMobile && (
          <WindowContentMobile
            dimension={dimension}
            project={openedProjectMobile}
            closeOpenedProjectMobile={closeOpenedProjectMobile}
          />
        )}
        {/* {openedProject.length > 0 &&
          openedProject.map((project, i) => <WindowContent />)} */}
      </Layer>
    </Stage>
  );
};

export default PastProject;
