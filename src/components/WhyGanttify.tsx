import PageHeading from "./PageHeading";
import ProductivityCard from "./ProductivityCard";

import { LuCodesandbox } from "react-icons/lu";

import CollaborationImg from '/assets/icons/collaboration.png';
import EnergyImg from '/assets/icons/energy.png';
import AutomationImg from '/assets/icons/automation.png';





export default function WhyGanttify() {
  return (
    <section className="w-full bg-white rounded-3xl mt-2 sm:mt-4 px-10 md:px-30 pt-1 pb-20">

      <PageHeading
        logo={<LuCodesandbox />}
        title="Why Ganttify"
        heading="Increase Productivity and Save Time"
        headingWidth="w-[40%]"
        message="Supercharge productivity. Streamline work by doing it, and seeing it, in one place"
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProductivityCard 
          logo={CollaborationImg}
          heading="Improve Collaboration"
          message="Boost teamwork and efficiency with our easy-to-use collaboration tools. Communicate clearly and share document in real time"
        />
        <ProductivityCard 
          logo={EnergyImg}
          heading="Enhance Visibility"
          message="Keep track of your projects with clear, real-time updates. Our tools provide a comprehensive view of your progress"
        />
        <ProductivityCard 
          logo={AutomationImg}
          heading="Automate Work"
          message="Streamline your workflow by automating reparative tasks. Our solutions help you set up automatic processes"
        />
        
      </div>

    </section>
  )
}
