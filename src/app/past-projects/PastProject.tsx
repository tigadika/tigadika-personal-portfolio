import { useState } from "react";
import { Stage, Layer, Star, Text, Shape, Group, Line } from "react-konva";
import { Html } from "react-konva-utils";
import FileShape from "./ui/FileShape";
import { PAST_PROJECTS } from "./data";

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const dataProjects = PAST_PROJECTS;

const PastProject = ({ dimension }: { dimension: any }) => {
  const [openedProject, setOpenedProject] = useState<any>([]);

  // const handleDragStart = (e: any) => {
  //   const id = e.target.id();
  //   setStars(
  //     stars.map((star) => {
  //       return {
  //         ...star,
  //         isDragging: star.id === id,
  //       };
  //     }),
  //   );
  // };
  // const handleDragEnd = (e: any) => {
  //   setStars(
  //     stars.map((star) => {
  //       return {
  //         ...star,
  //         isDragging: false,
  //       };
  //     }),
  //   );
  // };

  return (
    <Stage width={dimension.width} height={dimension.height}>
      <Layer>
        {dataProjects &&
          dataProjects.map((project, i) => (
            <FileShape key={project.id} i={i} project={project} />
          ))}
      </Layer>
    </Stage>
  );
};

export default PastProject;
