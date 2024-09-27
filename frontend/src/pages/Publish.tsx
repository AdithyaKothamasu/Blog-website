import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
  return (
    <div>
        <Appbar/>
        <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full">
            
                <input onChange={(e)=>{
                    setTitle(e.target.value)
                }} type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-2xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Title"/>

                <TextEditor onChange={(e)=>{
                    setContent(e.target.value)
                }} />
                <button onClick={async ()=>{
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content
                    },{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }});
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="mt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                    Publish Blog
                </button>
            </div>
        </div>
    </div>
  )
}

const TextEditor = ({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) =>{
    return (
        <div>   
            <form>
                <div className="w-full my-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex items-center justify-between px-3 py-2 border-b">
                        <div className="flex w-full flex-wrap items-center sm:divide-x sm:rtl:divide-x-reverse ">
                            <div className="px-4 py-2 bg-white rounded-b-lg w-full">
                                <textarea onChange={onChange} rows={15} className="outline-none block w-full px-0 text-lg text-gray-800 bg-white " placeholder="Write a Blog..." required ></textarea>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
