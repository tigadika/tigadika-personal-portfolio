import {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { PAST_PROJECTS, PastProject } from "./data";
import { cn } from "../../lib/utils";
import { FaLink, FaX } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";

export default function PastProjectContainer() {
  const data = PAST_PROJECTS;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openedProject, setOpenendProject] = useState<PastProject | null>(null);

  const openModal = (project: PastProject) => {
    setOpenendProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function isInPattern(num: number): boolean {
    const positiveNum = Math.abs(num);

    const group = Math.floor((positiveNum - 1) / 2);

    const baseFirst = 1 + group * 3;
    const baseSecond = baseFirst + 1;

    return positiveNum === baseFirst || positiveNum === baseSecond;
  }

  return (
    <>
      <div
        id="projects"
        className="mb-10 mt-20 flex h-fit items-center justify-center"
      >
        <div className="w-fit bg-gradient-to-r from-zinc-300 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(179,116,240,0.5)]">
          <h2 className="text-pretty text-center text-[2.5rem] font-semibold tracking-tight">
            Past Projects
          </h2>
        </div>
      </div>
      <div className="mx-auto mb-20 grid w-2/3 grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.map((project, i) => (
            <motion.div
              key={i}
              layoutId={`project-${i}`}
              className={cn(
                isInPattern(i) ? "lg:col-span-2" : "lg:col-span-1",
                "group relative w-full cursor-pointer overflow-hidden rounded-md bg-zinc-300",
              )}
              onClick={() => {
                openModal(project);
              }}
            >
              <motion.div className="absolute left-5 top-5 z-30 text-[2rem] font-semibold tracking-tight text-zinc-100">
                {project.name}
              </motion.div>
              <motion.div className="absolute h-full w-full bg-gradient-to-b from-purple-800 to-zinc-200 opacity-60"></motion.div>
              <motion.div>
                <img
                  src={project.imgUrl}
                  alt=""
                  className="h-[18rem] w-full object-cover object-left-top"
                />
              </motion.div>
            </motion.div>
          ))}
      </div>
      <AnimatePresence>
        {openedProject && isModalOpen && (
          <PastProjectModal
            isOpen={isModalOpen}
            onClose={closeModal}
            projectIndex={data.indexOf(openedProject)}
          >
            <motion.div layoutId={`project-${data.indexOf(openedProject)}`}>
              <img
                src={openedProject?.imgUrl}
                alt=""
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-3 px-6 py-2 text-zinc-200"
              layoutId={`project-content-${data.indexOf(openedProject)}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: 0.5 },
              }}
              exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg font-semibold">{openedProject?.name}</h3>
              <a
                href={openedProject?.links}
                target="_blank"
                className="font-semibold text-pink-500 hover:text-purple-500"
              >
                <FaLink className="inline" /> {openedProject?.links}
              </a>
              <pre className="block text-pretty text-justify font-sans">
                {openedProject?.description}
              </pre>
              <motion.div className="flex flex-wrap gap-2">
                {openedProject &&
                  openedProject.tags.map((tag, i) => (
                    <motion.div
                      key={i}
                      className="tracking-tight-tracking-tight cursor-default rounded-md border border-pink-500 px-1 text-sm text-pink-500 hover:bg-pink-500 hover:text-white"
                    >
                      {tag}
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </PastProjectModal>
        )}
      </AnimatePresence>
    </>
  );
}

function PastProjectModal({
  isOpen,
  onClose,
  children,
  projectIndex,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  projectIndex: number;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    if (isOpen) {
      dialogElement?.showModal();
    } else {
      dialogElement?.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    // Check if the click is outside the modal content
    const dialogElement = dialogRef.current;
    const contentElement = contentRef.current;

    if (
      dialogElement &&
      contentElement &&
      !contentElement.contains(event.target as Node)
    ) {
      handleClose();
    }
  };
  return (
    <motion.dialog
      ref={dialogRef}
      onClose={handleClose}
      onKeyDown={handleKeyDown}
      onClick={handleDialogClick}
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -50 }}
      transition={{ duration: 0.2, delay: 0.1, type: "tween" }}
      style={{ transformOrigin: "top" }}
      id={String(projectIndex)}
      className="scrollbar w-full max-w-xl rounded-lg bg-white shadow-xl backdrop:bg-zinc-900 backdrop:opacity-80"
    >
      <div ref={contentRef} className="modal-content relative bg-zinc-800">
        <div className="absolute right-4 top-4">
          <FaX
            onClick={handleClose}
            className="cursor-pointer text-2xl text-purple-500 drop-shadow-[0_0_40px_rgba(229,53,171,0.9)]"
          />
        </div>
        {children}
        <div className="flex items-center justify-end gap-4 p-4">
          <button
            onClick={handleClose}
            className="mt-4 rounded-md border border-purple-500 px-4 py-1 text-sm font-semibold tracking-tight text-purple-500 hover:bg-purple-600 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </motion.dialog>
  );
}
