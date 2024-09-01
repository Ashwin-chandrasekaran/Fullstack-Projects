import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./assets/components/Signup"
import Signin from "./assets/components/Signin"
import Voyagerdashboard from "./assets/components/Voyagerdashboard"
import Fooddetails from "./assets/components/Fooddetails"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/Voyagerdashboard" element={<Voyagerdashboard/>}/>
        <Route path="/fooddetails" element={<Fooddetails/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }