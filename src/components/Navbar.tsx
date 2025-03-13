
import { RiBox2Fill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {

  const navTl = gsap.timeline();

  useGSAP(() => {

    navTl.from('#navbar', {
      opacity: 0,
      duration: 1,
    })
    navTl.from('#btns, #logo', {
      y: '120%',
      duration: 1,
    })
    navTl.from('#menu', {
      x: '100%',
      duration: 1,
    }, '-=1')
    navTl.from('#text-logo', {
      x: '-50%',
      opacity: 0,
      duration: 1,
    }, '-=0.5')
    navTl.to('.link', {
      opacity: 1,
      stagger: 0.1
    }, '-=0.90')

  }, []);

  return (
    <header id="navbar" className="w-full bg-white py-4 px-8 rounded-2xl">
      <nav className="flex justify-between items-center overflow-hidden">
        <div className="flex items-center gap-8">

          <div className="flex gap-1 items-center">
            <RiBox2Fill className="text-3xl" id="logo" />
            <p id="text-logo" className="font-semibold text-xl">Ganttify</p>
          </div>

          <div className="max-lg:hidden" id="links">
            {['Product', 'Solutions', 'Resources', 'Company', 'Pricing'].map((nav, i) => (
              <a
                href="#"
                key={i}
                className="link opacity-0 text-sm font-semibold px-4 text-neutral-700 hover:text-black transition-all"
              >
                {nav}
              </a>
            ))}
          </div>
        </div>

        <div id="btns" className="hidden lg:flex gap-2">
          <button className="px-4 py-2 border-[1.5px] border-neutral-300 rounded-xl cursor-pointer">
            Sign In
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-xl cursor-pointer">
            Get Started
          </button>
        </div>

        <div id="menu" className="lg:hidden text-3xl">
          <CgMenuRight />
        </div>
      </nav>
    </header>
  )
}
