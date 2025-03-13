
import { RiBox2Fill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";

export default function Navbar() {
  return (
    <header className="w-full bg-white py-4 px-8 rounded-2xl">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-8">

          <div className="flex gap-1 items-center">
            <RiBox2Fill className="text-3xl" />
            <p className="font-semibold text-xl">Ganttify</p>
          </div>

          <div className="max-lg:hidden">
            {['Product', 'Solutions', 'Resources', 'Company', 'Pricing'].map((nav, i) => (
              <a
                href="#"
                key={i}
                className="text-sm font-semibold px-4 text-neutral-700 hover:text-black transition-all"
              >
                {nav}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex gap-2">
          <button className="px-4 py-2 border-[1.5px] border-neutral-300 rounded-xl cursor-pointer">
            Sign In
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-xl cursor-pointer">
            Get Started
          </button>
        </div>

        <div className="lg:hidden text-3xl">
          <CgMenuRight />
        </div>
      </nav>
    </header>
  )
}
