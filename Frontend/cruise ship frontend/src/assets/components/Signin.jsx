import React, {useState} from "react"
import Heading from "./Heading"
import Subheading from "./Subheading"
import Inputbox from "./Inputbox"
import Setusercategory from "./Setusercategory"
import Button from "./Button"
import Bottomwarning from "./Bottomwarning"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Signup(){
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [usercategory,setusercategory]=useState("")
    const navigate=useNavigate()
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="rounded-lg border border-white bg-white w-80 h-full text-center p-2 px-4">
                <Heading label="Sign In"/>
                <Subheading label="enter the creadentials to signin into your profile"/>
                <Inputbox onchange={(e)=>{
                    setusername(e.target.value)
                }} placeholder="johnDoe@gmail.com" label={"Username"}/>
                <Inputbox onchange={(e)=>{
                    setpassword(e.target.value)
                }} placeholder="password" label={"Password"}/>
                <Setusercategory onChange={(e)=>{
                    setusercategory(e.target.value)
                }} />
                <Button onClick={async()=>{
                    const response=await axios.post("http://localhost:3000/api/v2/signin",{
                        username,
                        password,
                        usercategory
                    })
                    localStorage.setItem("token",response.data.token)
                    navigate("/Voyagerdashboard")

                }} label="Sign In"/>
                <div>
                    <Bottomwarning label={"Don't have an account?"} buttontext={"Sign up"} to={"/sign-up"}/>
                </div>

            </div>
        </div>
    )
}
