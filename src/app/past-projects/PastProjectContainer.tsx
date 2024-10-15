import { useEffect, useRef, useState } from "react";
import PastProject from "./PastProject";

export default function PastProjectContainer() {
  const divContainerKonvaRef = useRef<any>(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (
      divContainerKonvaRef.current?.offsetHeight &&
      divContainerKonvaRef.current?.offsetWidth
    ) {
      setContainerDimensions({
        width: divContainerKonvaRef.current.offsetWidth,
        height: divContainerKonvaRef.current.offsetHeight,
      });
    }

    window.addEventListener("resize", () => {
      setContainerDimensions({
        width: divContainerKonvaRef.current.offsetWidth,
        height: divContainerKonvaRef.current.offsetHeight,
      });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setContainerDimensions({
          width: divContainerKonvaRef.current.offsetWidth,
          height: divContainerKonvaRef.current.offsetHeight,
        });
      });
    };
  }, []);

  return (
    <div
      id="project"
      className="relative flex h-screen flex-col items-center justify-start gap-5 py-20"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:100px_100px]"></div>
      <div className="space-y-2 text-center">
        <h2 className="font-title text-4xl">past project</h2>
        <p className="font-mono">
          Note: double click on the file to see its content. You can also drag
          file/window.
        </p>
      </div>
      <div
        ref={divContainerKonvaRef}
        className="h-full w-full overflow-hidden 2xl:w-3/4"
      >
        <PastProject dimension={containerDimensions} />
      </div>
    </div>
  );
}
