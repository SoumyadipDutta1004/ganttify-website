import { ReactNode } from "react";



type HeadingProp = {
  logo: ReactNode
  title: string,
  heading: string,
  message: string,
  headingStyle?: string,
  paraStyle?: string,
  alignItems?: string
}


export default function PageHeading({
  logo,
  title,
  heading,
  message,
  headingStyle,
  paraStyle,
  alignItems
}: HeadingProp
) {

  return (
    <div className={`w-full h-fit flex flex-col ${alignItems ? alignItems : 'items-start'} justify-center my-10 md:my-20`}>
      <p className="border-[1.5px] border-neutral-400 text-neutral-500 text-sm py-1 px-3 rounded-lg flex items-center gap-2">
        {logo}
        {title}
      </p>
      <h1 className={`${headingStyle} text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter mt-3 sm:mt-6`}>
        {heading}
      </h1>
      <p className={`${paraStyle} text-neutral-500 text-sm sm:text-lg mt-3 sm:mt-6`}>
        {message}
      </p>
    </div>
  );
}
