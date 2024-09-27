import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardType{
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}
export default function BlogCard({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardType) {
  return (
    <Link to={`/blog/${id}`} >
      <div className="p-4 border-b-2 border-slate-100 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} size="small"/> 
          <div className="flex justify-center ">
          <div className="font-extralight text-sm text-slate-400 px-2 flex flex-col justify-center">{authorName}</div>
          <div className="text-sm font-bold text-slate-400 flex flex-col justify-center">&#183;</div>
          <div className="font-thin text-slate-400 text-sm px-2 flex flex-col justify-center">{publishedDate}</div>
          </div>
        </div>
        <div className="text-xl font-bold pt-2">
          {title}
        </div>
        <div className="font-thin text-md ">
          {content.slice(0, 100)}...
        </div>
        <div className="text-slate-400 text-sm font-thin pt-2">
          {Math.ceil(content.length / 100)} min(s) read
        </div>
      </div>
    </Link>
  )
}


