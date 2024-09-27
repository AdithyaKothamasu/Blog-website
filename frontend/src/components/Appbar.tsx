import Avatar from "./Avatar"

export const Appbar = () => {
  return (
    <div className="border-b border-slate-200 flex justify-between px-10 py-2">
      <div className="flex flex-col justify-center font-bold text-xl">
        BoBo
      </div>
      <div>
        <Avatar name="Adithya" size="big"/>
      </div>
    </div>
  )
}

