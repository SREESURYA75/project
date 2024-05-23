import React from "react";
import {Routes,Route} from 'react-router-dom';
import Cart from "./CartFolder/Card";
import Cart from "./productdetail";
import Product from "./CartFolder/product_d";
import Homepage from "../Compponent/Homepage";
import About from "../Compponent/About";
import Service from "../Compponent/Service";
import Login from "../Compponent/Login";



const Rout=()=>{
    return(
        <div>
        <Routes>
            <Route path="/" element={Homepage}/>
            <Route path="/About" element={About}/>
            <Route path="/Service" element={Service}/>
            <Route path="/product" element={Product}/>
            <Route path="/cart" element={Cart}/>
            <Route path="/Login" element={Login}/>
        </Routes>

        </div>
    )
}
export default Rout;