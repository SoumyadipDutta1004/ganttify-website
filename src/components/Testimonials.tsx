import PageHeading from "./PageHeading";
import { FiUsers } from "react-icons/fi";
import TestimonialCard from "./TestimonialCard";

import ProfilePic from "/assets/images/profile_pic.jpg"


export default function Testimonials() {
  return (
    <section className="w-full bg-white rounded-3xl mt-2 sm:mt-4 px-10 md:px-30 pt-1 pb-20" >
      <PageHeading
        logo={<FiUsers />}
        title="Customers"
        heading="See What Our Customers Are Saying"
        message="Here's what some of our customers say about our platform"
        alignItems="items-center"
        headingStyle="text-center xl:max-w-[45%]"
        paraStyle="text-center"
      />


      <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">

        <TestimonialCard 
          profile={ProfilePic}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio quasi, nihil voluptate quas ratione reprehenderit ab nesciunt! Maiores, provident."
          name="Jane Cooper"
          role="Co-Founder, Heroes Digital"
        />
        <TestimonialCard 
          profile={ProfilePic}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio quasi, nihil voluptate quas ratione reprehenderit ab nesciunt! Maiores, provident."
          name="Jane Cooper"
          role="Co-Founder, Heroes Digital"
        />
        <TestimonialCard 
          profile={ProfilePic}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio quasi, nihil voluptate quas ratione reprehenderit ab nesciunt! Maiores, provident."
          name="Jane Cooper"
          role="Co-Founder, Heroes Digital"
        />
        <TestimonialCard 
          profile={ProfilePic}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio quasi, nihil voluptate quas ratione reprehenderit ab nesciunt! Maiores, provident."
          name="Jane Cooper"
          role="Co-Founder, Heroes Digital"
        />
        <TestimonialCard 
          profile={ProfilePic}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio quasi, nihil voluptate quas ratione reprehenderit ab nesciunt! Maiores, provident."
          name="Jane Cooper"
          role="Co-Founder, Heroes Digital"
        />
        <TestimonialCard 
          profile={ProfilePic}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio quasi, nihil voluptate quas ratione reprehenderit ab nesciunt! Maiores, provident."
          name="Jane Cooper"
          role="Co-Founder, Heroes Digital"
        />
        <TestimonialCard 
          profile={ProfilePic}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio quasi, nihil voluptate quas ratione reprehenderit ab nesciunt! Maiores, provident."
          name="Jane Cooper"
          role="Co-Founder, Heroes Digital"
        />
        <TestimonialCard 
          profile={ProfilePic}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio quasi, nihil voluptate quas ratione reprehenderit ab nesciunt! Maiores, provident."
          name="Jane Cooper"
          role="Co-Founder, Heroes Digital"
        />
        

      </div>
    </section>
  )
}
