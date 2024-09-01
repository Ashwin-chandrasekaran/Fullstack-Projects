import axios from "axios"
import { useEffect, useState } from "react"
export default function Fooddetails(){
    const [fooditems,setfooditems]=useState([])
    useEffect(()=>{
        const fetchfooditems=async()=>{
            const response=await axios.get("http://localhost:3000/api/v2/user/AllItems/Food",{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                  }
                }
            )
            console.log('API Response:', response.data.data)
            setfooditems(response.data.data)
        }
        fetchfooditems()
    },[])
    return(
        <div>
                {fooditems.map(fooditem=>(
                        <button className="w-64">
                            <p>{fooditem.itemname}</p>
                            <p>{fooditem.description}</p>
                            <p>{fooditem.price}</p>
                            <button onClick={()=>{
                                console.log(_id)
                            }} className="border-solid border-2 border-sky-500">Add</button>
                        </button>

                ))}
        </div>
    )

}