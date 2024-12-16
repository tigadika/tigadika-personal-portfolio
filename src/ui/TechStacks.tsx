export default function TechStacks() {
  return (
    <>
      <div className="h-fit">
        <div className="flex flex-col items-center justify-start px-2 py-28">
          <div className="w-fit bg-gradient-to-r from-zinc-300 via-purple-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(179,116,240,0.5)]">
            <h2 className="text-pretty text-center text-[2.5rem] font-semibold tracking-tight">
              Techstack I Use on a Daily Basis
            </h2>
          </div>
          <div className="mask-transparent relative mt-10 h-fit w-full space-y-6 bg-zinc-950 md:overflow-hidden">
            {/* first row */}
            <div className="hidden min-w-full items-center justify-center gap-6 md:flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <EmptyStack key={i} />
              ))}
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(247,223,30,0.5)]">
                <img
                  src="/techstack/js.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(247,223,30,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(59,130,198,0.5)]">
                <img
                  src="/techstack/ts.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(59,130,198,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_30px_rgba(43,86,120,0.5)]">
                <img
                  src="/techstack/postgres.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_20px_rgba(43,86,120,0.5)]"
                />
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <EmptyStack key={i} />
              ))}
            </div>
            {/* second row */}
            <div className="hidden items-center justify-center gap-6 md:flex">
              {Array.from({ length: 3 }).map((_, i) => (
                <EmptyStack key={i} />
              ))}
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(0,216,255,0.5)]">
                <img
                  src="/techstack/react.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(0,216,255,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img
                  src="/techstack/next.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(118,74,188,0.5)]">
                <img
                  src="/techstack/redux.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(118,74,188,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(252,179,120,0.5)]">
                <img
                  src="/techstack/tanstack.svg"
                  alt=""
                  className="w-full rounded-full drop-shadow-[0_0_10px_rgba(252,179,120,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(65,184,131,0.5)]">
                <img
                  src="/techstack/vue.svg"
                  alt=""
                  className="h-full w-full drop-shadow-[0_0_10px_rgba(65,184,131,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(255,208,75,0.5)]">
                <img
                  src="/techstack/pinia.svg"
                  alt=""
                  className="h-full w-full drop-shadow-[0_0_10px_rgba(255,208,75,0.5)]"
                />
              </div>
              {Array.from({ length: 3 }).map((_, i) => (
                <EmptyStack key={i} />
              ))}
            </div>
            {/* third row */}
            <div className="hidden items-center justify-center gap-6 md:flex">
              {Array.from({ length: 4 }).map((_, i) => (
                <EmptyStack key={i} />
              ))}
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img
                  src="/techstack/express.svg"
                  alt=""
                  className="w-full rounded-full bg-zinc-300 p-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(19,170,82,0.5)]">
                <img
                  src="/techstack/mongo.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(19,170,82,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_30px_rgba(198,48,43,0.5)]">
                <img
                  src="/techstack/redis.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(198,48,43,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(229,53,171,0.5)]">
                <img
                  src="/techstack/graphql.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(229,53,171,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img
                  src="/techstack/docker.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
              {Array.from({ length: 4 }).map((_, i) => (
                <EmptyStack key={i} />
              ))}
            </div>
            <div className="mx-auto grid grid-cols-3 place-items-center gap-6 md:hidden">
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(247,223,30,0.5)]">
                <img
                  src="/techstack/js.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(247,223,30,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(59,130,198,0.5)]">
                <img
                  src="/techstack/ts.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(59,130,198,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_30px_rgba(43,86,120,0.5)]">
                <img
                  src="/techstack/postgres.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_20px_rgba(43,86,120,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(0,216,255,0.5)]">
                <img
                  src="/techstack/react.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(0,216,255,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img
                  src="/techstack/next.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(118,74,188,0.5)]">
                <img
                  src="/techstack/redux.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(118,74,188,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(252,179,120,0.5)]">
                <img
                  src="/techstack/tanstack.svg"
                  alt=""
                  className="w-full rounded-full drop-shadow-[0_0_10px_rgba(252,179,120,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(65,184,131,0.5)]">
                <img
                  src="/techstack/vue.svg"
                  alt=""
                  className="h-full w-full drop-shadow-[0_0_10px_rgba(65,184,131,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(255,208,75,0.5)]">
                <img
                  src="/techstack/pinia.svg"
                  alt=""
                  className="h-full w-full drop-shadow-[0_0_10px_rgba(255,208,75,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img
                  src="/techstack/express.svg"
                  alt=""
                  className="w-full rounded-full bg-zinc-300 p-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(19,170,82,0.5)]">
                <img
                  src="/techstack/mongo.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(19,170,82,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_30px_rgba(198,48,43,0.5)]">
                <img
                  src="/techstack/redis.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(198,48,43,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(229,53,171,0.5)]">
                <img
                  src="/techstack/graphql.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(229,53,171,0.5)]"
                />
              </div>
              <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img
                  src="/techstack/docker.svg"
                  alt=""
                  className="w-full drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmptyStack() {
  return (
    <div className="h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-920 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900"></div>
  );
}
