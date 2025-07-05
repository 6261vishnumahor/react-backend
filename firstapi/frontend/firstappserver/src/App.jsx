import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./home.jsx";
import GetUserdata from "./getUserdata.jsx";
import About from "./about.jsx";
import { useState } from "react";
const App=()=>{

//that is use props============================================
let a=25;
let [y,sety1]=useState("vishnu")
// =======================================================
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home val={a} val1={y} val2={sety1}></Home>}> </Route>
      <Route path="/about" element={<About></About>}> </Route>
      <Route path="/GetUserdata" element={<GetUserdata></GetUserdata>}> </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;
