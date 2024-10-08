import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blog{
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "name": string;
    }
}

export const useBlog = ({id} : {id: string}) => { 
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>();
    // console.log(localStorage.getItem("token"));

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{
            setBlog(res.data.blog)
            setLoading(false)
        })
    },[id])

    return {
        loading,
        blog
    }
}

export const useBlogs = () =>{
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([]);
    // console.log(localStorage.getItem("token"));

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{
            setBlogs(res.data.blogs)
            setLoading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
}