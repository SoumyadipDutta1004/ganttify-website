
type CardProps = {
  profile: string,
  message: string,
  name: string,
  role: string
}



export default function TestimonialCard({
  profile,
  message,
  name,
  role
}: CardProps
) {

  return (
    <div className="w-full h-full border-[1.5px] border-neutral-200 rounded-2xl flex flex-col items-start p-6">
      <p className="text-sm font-semibold">
        {message}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div className="h-9 w-9 overflow-hidden rounded-full">
          <img src={profile} alt="profile image"  className="w-full h-full object-cover"/>
        </div>
        <div>
          <p className="font-bold">
            {name}
          </p>
          <p className="text-sm text-neutral-500">
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}
