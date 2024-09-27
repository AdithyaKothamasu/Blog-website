
const BlogSkeleton = () => {
  return (    
    <div role="status" className="animate-pulse">
        <div className="p-4 border-b-2 border-slate-100 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
        <div className="h-2.5 bg-gray-200 rounded-full"></div>
          <div className="flex justify-center ">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="text-sm font-bold text-slate-400 flex flex-col justify-center">&#183;</div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>
        <div className="text-xl font-bold pt-2">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="font-thin text-md ">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-400 text-sm font-thin pt-2">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
    </div>
  )
}

export default BlogSkeleton
