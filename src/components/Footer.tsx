import { RiBox2Fill } from "react-icons/ri";

const ganttify = ['Ganttify', 'Home', 'Product', 'Pricing', 'Customer Success', 'Templates', 'Trust & Security'];
const solutions = ['Solutions', 'Project Management', 'Goal Management', 'Task Management', 'Productivity', 'Work Management', 'Project Planning'];
const aboutUs = ['About Us', 'Compony', 'Leadership', 'Customers', 'Careers', 'Change Log'];
const resources = ['Resources', 'Help Center', 'FAQ', 'Developers & API', 'Community', 'Events', 'Status'];
const helpfulLink = ['Helpful Link', 'Legal Center', 'Privacy Policy', 'Partnership'];




export default function Footer() {


  return (
    <section className="w-full bg-black text-white rounded-3xl mt-2 sm:mt-4 px-10 md:px-30 pt-1 pb-20">

      <div className="mt-20 flex justify-between">
        <div className="flex gap-1 items-center">
          <RiBox2Fill className="text-3xl" id="logo" />
          <p id="text-logo" className="font-semibold text-xl">Ganttify</p>
        </div>


      </div>
      <div className="w-full flex flex-wrap justify-between gap-4 mt-10 pb-20 border-b-2 border-neutral-600">
        <IterateLinks linkArr={ganttify} />
        <IterateLinks linkArr={solutions} />
        <IterateLinks linkArr={aboutUs} />
        <IterateLinks linkArr={resources} />
        <IterateLinks linkArr={helpfulLink} />
      </div>
    </section>
  )
}


function IterateLinks({
  linkArr
}: {
  linkArr: string[]
}) {

  return (
    <div>
      {linkArr.map((link, i) =>
        <p
          key={i}
          className={`${i === 0 ? 'font-bold' : 'text-sm text-neutral-500'} mt-4`}
        >
          {link}
        </p>
      )}
    </div>
  );
}