import React from "react";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import CategoryButton from "./CategoryButton";
export default function Voyagerdashboard(){
    const navigate=useNavigate()
    return(
        <div>
            <CategoryButton label="Food" onClick={()=>{
                navigate("/fooddetails")
            }}/>
            <CategoryButton label="Fitness" onClick={()=>{
                navigate("/fooddetails")
            }}/>
            <CategoryButton label="stationerys" onClick={()=>{
                navigate("/fooddetails")
            }}/>
            <CategoryButton label="Salon" onClick={()=>{
                navigate("/fooddetails")
            }}/>
            <CategoryButton label="Partyhalls" onClick={()=>{
                navigate("/fooddetails")
            }}/>
        </div>    
    )
}