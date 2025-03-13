
type CardProps = {
  logo: string,
  heading: string,
  message: string
}


export default function ProductivityCard({
  logo,
  heading,
  message
}: CardProps
) {

  return (
    <div className="w-full h-full border-[1.5px] border-neutral-200 rounded-3xl flex flex-col items-start p-8">

      <img
        src={logo}
        alt="Collaboration"
        width={48}
      />

      <h2
        className="text-xl font-semibold mt-6"
      >
        {heading}
      </h2>

      <p
        className="text-sm text-neutral-500 mt-3"
      >
        {message}
      </p>
    </div>
  );
}