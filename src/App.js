import React from "react";
import "./css/style.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./Navbar";


const App= ()=>{
 return (
  
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<Home/>}  />
      <Route path="/about"  element={<About/>}  />
      <Route path="/service"  element={<Services/>}  />
      <Route path="/portfolio"  element={<Portfolio/>}  />
      <Route path="/contact"  element={<Contact/>}  />
    </Routes>
  </Router>
 
 )
}
export default  App;
