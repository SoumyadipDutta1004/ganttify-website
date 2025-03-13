import { ReactNode } from "react";


type CardProps = {
  image: string,
  logo: ReactNode,
  title: string,
  message: string
}


export default function FeaturesCard({
  image,
  logo,
  title,
  message
}: CardProps
) {

  return (
    <div className="w-full h-fit">
      <img
        src={image}
        alt=""
        className="h-[70%] w-full object-cover object-left-top rounded-2xl border-[1.5px] border-neutral-200"
      />
      <div className="mt-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          {logo}
          {title}
        </h2>
        <p className="text-sm text-neutral-500 mt-3">
          {message}
        </p>
      </div>
    </div>
  );
}