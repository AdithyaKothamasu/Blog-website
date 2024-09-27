import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import Avatar from "./Avatar"

const FullBlog = ({blog}: {blog: Blog}) => {
  return (
    <div>
        <Appbar/>
        <div className=" flex justify-center">
            <div className="grid grid-cols-12 px-20 pt-200 w-full pt-12 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-400 pt-4">
                        Posted on 27th September, 2024
                    </div>
                    <div className=" pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Anonymous"} size="big"/>
                        </div>
                        <div className="">
                            <div className="text-2xl font-bold"> 
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                random catch phrase about the authors ability to grab user attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullBlog
