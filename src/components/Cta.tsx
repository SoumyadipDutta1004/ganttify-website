



export default function Cta() {

  return (
    <section className="w-full bg-black rounded-3xl mt-4 pb-30 overflow-hidden flex flex-col items-center relative">
      <div className="max-xl:px-10 xl:max-w-[40%] h-fit flex flex-col items-center justify-center mt-10 text-white text-center">

        <h1 className={` text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter mt-3 sm:mt-6 leading-snug`}>
          A Better Way to Work Today, Together
        </h1>
        <p className="text-neutral-500 text-sm sm:text-lg mt-3 sm:mt-6">
          Ganttify enables you achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objective of the company
        </p>
      </div>

      <div className="flex gap-2 sm:gap-5 mt-10">
        <button className="px-3 sm:px-8 py-1 sm:py-3 bg-white rounded-lg sm:rounded-2xl text-sm font-semibold cursor-pointer">
          Get Started
        </button>
        <button className="px-3 sm:px-8 py-1 sm:py-3 bg-[rgba(162,162,162,0.3)] border-[2px] border-neutral-600 text-white rounded-lg sm:rounded-2xl text-sm font-semibold cursor-pointer">
          How it Works
        </button>
      </div>
    </section>
  )
}
