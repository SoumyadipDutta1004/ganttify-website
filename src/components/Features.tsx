import PageHeading from "./PageHeading";
import FeaturesCard from "./FeaturesCard";

import AlignContainer from "/assets/images/Align_Container.jpg";
import ItemBody1 from "/assets/images/item__body1.jpg";
import ItemBody2 from "/assets/images/item__body2.jpg";
import ItemBody3 from "/assets/images/item__body3.jpg";

import { LuBoxes } from "react-icons/lu";
import { GoProjectRoadmap } from "react-icons/go";
import { GoGoal } from "react-icons/go";
import { LuNetwork } from "react-icons/lu";
import { BsHddNetwork } from "react-icons/bs";



export default function Features() {

  return (
    <section className="w-full bg-white rounded-3xl mt-4 px-10 md:px-30 pb-10 pt-1 md:pb-20">
      <PageHeading
        logo={<LuBoxes />}
        title="Features"
        heading="Everything Your Team Looking For"
        message="Ganttify's exceptional flexibility can handle any type of work. And we never stop innovating"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

        <FeaturesCard 
          image={AlignContainer}
          logo={<GoProjectRoadmap />}
          title="Project Management"
          message="Manage your projects from start to finish. With all of your project in Ganttify, you'll always know who's doing what, by when"
        />
        <FeaturesCard 
          image={ItemBody1}
          logo={<GoGoal />}
          title="Goals and Reporting"
          message="See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters"
        />
        <FeaturesCard 
          image={ItemBody2}
          logo={<BsHddNetwork />}
          title="Resource Management"
          message="Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives"
        />
        <FeaturesCard 
          image={ItemBody3}
          logo={<LuNetwork />}
          title="Workflow and Animations"
          message="Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time"
        />

      </div>
    </section>
  )
}
