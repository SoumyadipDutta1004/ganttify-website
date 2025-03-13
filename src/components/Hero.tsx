import { FaLongArrowAltRight } from "react-icons/fa";
import dashboardImg from '/assets/images/dashboard.png'




export default function Hero() {

  return (
    <main className="w-full h-[70vh] md:h-[80vh] lg:min-h-screen mt-2 sm:mt-4 rounded-3xl overflow-hidden relative">
      <div className="absolute inset-0 h-full w-full bg-black [background:radial-gradient(65%_65%_at_50%_0%,#4c4b4e_0%,#000_100%)]" />

      <div className="w-full h-full pt-10 sm:pt-30">
        <div className="w-full h-full flex flex-col justify-start items-center relative">

          <a href="#"
            className="bg-[rgba(162,162,162,0.3)] border-[2px] max-sm:text-sm border-neutral-500 rounded-md sm:rounded-xl max-sm:py-0.5 sm:p-2 pl-2 sm:pl-5 flex items-center text-white"
          >
            Discover the all new Ganttigy 2.0
            <div className="py-0.5 px-1 sm:px-2 sm:py-1 ml-2 sm:ml-4 max-sm:mr-0.5 rounded-sm sm:rounded-lg bg-[rgba(189,189,189,0.45)] text-white">
              <FaLongArrowAltRight />
            </div>
          </a>

          <div className=" text-center mt-8">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-semibold">One Tools For Doing it</h1>
            <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-semibold sm:mt-4">All Together</h1>
            <p
              className="text-neutral-500 text-sm  lg:text-lg mt-2 sm:mt-4 max-w-[80%] mx-auto"
            >
              Ganttify enables you achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objective of the company
            </p>
          </div>

          <div className="flex gap-2 sm:gap-5 mt-12">
            <button className="px-3 sm:px-10 py-1 sm:py-3 bg-white rounded-lg sm:rounded-2xl text-sm sm:text-lg font-semibold cursor-pointer">
              Get Started
            </button>
            <button className="px-3 sm:px-10 py-1 sm:py-3 bg-[rgba(162,162,162,0.3)] border-[2px] border-neutral-600 text-white rounded-lg sm:rounded-2xl text-sm sm:text-lg font-semibold cursor-pointer">
              How it Works
            </button>
          </div>

          <div className="h-[50vh] mt-10 lg:mt-25 rounded-tr-4xl rounded-tl-4xl overflow-hidden border-b-0 border-16 border-[rgba(162,162,162,0.1)] outline-2 outline-neutral-800" >
            <img src={dashboardImg} alt="dashboard" width={1000} />
          </div>

        </div>
      </div>
    </main>
  )
}


