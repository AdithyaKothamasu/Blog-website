import { Link } from "react-router-dom"
import Avatar from "./Avatar"

export const Appbar = () => {
  return (
    <div className="border-b border-slate-200 flex justify-between px-10 py-2">
      <Link to={"/blogs"}>
        <div className="flex flex-col justify-center font-bold text-xl cursor-pointer">
          BugBlogs
        </div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-8 text-center me-2 mb-2 ">New Blog</button>
        </Link>
      <Avatar name="Adithya" size="big"/>
      </div>
    </div>
  )
}

