import Navbar from "./ui/Navbar";

import Flower from "./assets/flower.svg";
import { ArrowDownRight, X } from "lucide-react";

import Marquee from "react-fast-marquee";
import Header from "./ui/Header";
import PastProject from "./app/past-projects/PastProject";
import { useEffect, useRef, useState } from "react";

function App() {
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
    <>
      <Navbar />
      <Header />
      <div className="border-y-4 border-black py-4">
        <Marquee autoFill speed={20}>
          <div className="mr-10 flex items-center gap-10">
            <p className="font-title text-3xl">tigadika</p>
            <img src={Flower} alt="" className="w-8" />
          </div>
        </Marquee>
      </div>
      <div className="relative flex h-screen flex-col items-center justify-start gap-5 py-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:100px_100px]"></div>
        <h2 className="font-title text-4xl">past project</h2>
        <div ref={divContainerKonvaRef} className="h-full w-full">
          <PastProject dimension={containerDimensions} />
        </div>
        {/* <div className="h-3/4 w-2/3 items-center gap-3 border-2 border-black bg-white font-mono shadow-light transition-all">
          <div className="flex h-12 w-full items-center justify-between border-b-4 border-black bg-violet-400 px-4">
            <p>Nama_project</p>
            <button
              className={
                "flex cursor-pointer items-center gap-3 border-2 border-black bg-lime-300 px-1 py-1 font-mono shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              }
            >
              <X />
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
