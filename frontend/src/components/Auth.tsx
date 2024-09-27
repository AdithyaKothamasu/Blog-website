import { SignupInput } from "@adithya-kothamasu/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"
import axios from "axios"

const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    })
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }catch(e){
            alert(`error while signing ${type}`)
        }
    }
  return (
    <div className="h-screen justify-center flex flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-bold">
                        Create an account
                    </div>
                    <div className="text-slate-400 pl-1">
                        {type === "signup"? "Already have an account?" : "Don't have an account?"}
                        <Link to={type ==="signin" ? "/signup" : "/signin"} className="underline pl-2"> {type === "signin" ? "Sign up" : "Sign in"}</Link>
                    </div>
                </div>
                <div>
                    {type === "signup" ? <LabelledInput label="Name" placeholder="John Doe" onChange={(e) =>{
                        setPostInputs(c=>({
                            ...c,
                            name: e.target.value
                        }))
                    }}/> : null}
                    <LabelledInput label="Email" placeholder="johndoe123@gmail.com" onChange={(e) =>{
                        setPostInputs(c=>({
                            ...c,
                            email: e.target.value
                        }))
                    }}/>
                    <LabelledInput label="Password" type={"password"} placeholder="Password" onChange={(e) =>{
                        setPostInputs(c=>({
                            ...c,
                            password: e.target.value
                        }))
                    }}/>
                    <button onClick={sendRequest} type="button" className="text-white w-full mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signin"? "Sign in" : "Sign up"}</button>
                </div>
            </div>
        </div>
    </div>
  )
}
interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return (
        <div className="mt-4">
            <label className="block mb-2 text-sm font-semibold text-gray-900 pl-1" htmlFor="email">{label}</label>
            <input id="email" type={type || "text"} placeholder={placeholder} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"/>
        </div>
    )
}
export default Auth
