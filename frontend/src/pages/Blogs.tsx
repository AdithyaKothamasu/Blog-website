import { Appbar } from "../components/Appbar"
import BlogCard from "../components/BlogCard"

const Blogs = () => {
  return (
    <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="max-w-xl"> 
            <BlogCard authorName={"adithya"} title={"title"} content={"content"} publishedDate={"1 Jan 2024"}/>
            <BlogCard authorName={"adithya"} title={"title"} content={"content"} publishedDate={"1 Jan 2024"}/>
            <BlogCard authorName={"adithya"} title={"title"} content={"content"} publishedDate={"1 Jan 2024"}/>
            <BlogCard authorName={"adithya"} title={"title"} content={"content"} publishedDate={"1 Jan 2024"}/>
            </div>
        </div>
    </div>
  )
}

export default Blogs
