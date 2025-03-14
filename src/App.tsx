import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyGanttify from "./components/WhyGanttify";
// import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";




export default function App() {
  return (
    <div className="bg-[#e6e7e9] p-2 sm:p-4">

      <Navbar />
      <Hero />
      <Features />
      <WhyGanttify />
      {/* <Pricing /> */}
      <Cta />
      <Testimonials />
      <Footer />
    </div>
  )
}
