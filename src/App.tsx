function App() {
  return (
    <>
      <div className="h-screen w-full bg-zinc-950">
        <div className="relative flex h-full w-full flex-col px-5 pt-20 lg:mx-auto lg:h-screen lg:w-5/6">
          <div className="absolute right-[38%] top-[25%] h-[20rem] w-[20rem] animate-blob rounded-full bg-teal-500 opacity-30 blur-3xl filter ease-in-out md:right-[30%] md:h-[40rem] md:w-[40rem]"></div>
          <div className="animation-delay-4000 absolute right-[50%] top-[28%] h-[20rem] w-[20rem] animate-blob rounded-full bg-purple-600 opacity-30 blur-3xl filter ease-in-out md:right-[12%] md:h-[40rem] md:w-[40rem]"></div>
          <div className="animation-delay-2000 absolute right-[38%] top-[16%] h-[10rem] w-[10rem] animate-blob rounded-full bg-indigo-600 opacity-30 blur-3xl filter ease-in-out md:right-[6%] md:h-[30rem] md:w-[30rem]"></div>
          <div className="z-40 flex w-full flex-col items-center gap-10 text-center">
            <div className="bg-gradient-to-b from-zinc-50 to-zinc-500 bg-clip-text text-transparent">
              <h1 className="font-medium text-[2rem]">Hello, I'm tigadika</h1>
              <h2 className="font-semibold mt-[1rem] text-[4rem] leading-none">
                I'm a Web Developer
              </h2>
              <p className="mt-[2rem] text-pretty text-2xl">
                Most of the time i'm a frontend developer,
                <br /> but sometimes i go fullstack too.
              </p>
            </div>
            <button className="hover:-translate-y-1 rounded-md font-semibold group relative border-b border-t border-b-purple-800 border-t-gray-400 bg-gradient-to-br from-teal-500 via-purple-700 to-purple-600 px-4 py-2 text-gray-200 transition-all">
              <div className="rounded-md absolute left-0 top-0 h-full w-full bg-gradient-to-b from-zinc-50 to-transparent opacity-30 group-hover:opacity-40"></div>
              Know me more
            </button>
          </div>
          test
        </div>
      </div>
    </>
  );
}

export default App;
