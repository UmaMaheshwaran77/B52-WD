import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import All from "./All";
import FullStackDevelopment from "./FullStackDevelopment";
import DataScience from "./DataScience";
import Career from "./Career";
import CyberSecurity from "./CyberSecurity";
import './App.css';
import { useEffect,useState } from "react";

function App() {
const [navImage,setNavImage]=useState("");
useEffect(()=>{

switch (window.location.pathname){
  case "/":
    setNavImage("https://neatapi.aicte-india.org/files/course_logo/File_NEAT2020485_PROD_6_course_logo_1613557011.png");
    break;
    case "/fullstackdevelopment":
          setNavImage("https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp")
      break;
      case "/datascience":
            setNavImage("https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220705235051/How-to-Learn-Data-Science-in-10-weeks.jpg")
      break;
        case "/cybersecurity":
          setNavImage("https://terranovasecurity.com/wp-content/uploads/2023/03/qualities-cyber-security-professional.jpg");
          break;
          case "/career":
            setNavImage("https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Digital-Marketers.webp");
            break;
            
}
},[window.location.pathname])
  return (
    <BrowserRouter>
    <div className="container mb-8">
    <div className="row">
     
    
    <img src={navImage} height={400} width={700}></img>
    </div>
<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav  ">
        <Link className="nav-link" id="link" to={"/"}>ALL</Link>&emsp;
        <Link className="nav-link" id="link" to={"/fullstackdevelopment"}>FULL STACK DEVELOPMENT</Link>&emsp;
        <Link className="nav-link" id="link" to={"/datascience"}>DATA SCIENCE</Link>&emsp;
        <Link className="nav-link" id="link" to={"/cybersecurity"}>CYBER SECURITY</Link>&emsp;
        <Link className="nav-link" id="link" to={"/career"}>CAREER</Link>&emsp;
      </div>
    </div>
  </div>
</nav>
</div>
  <Routes>
<Route path="/" element={<All/>}></Route>
<Route path="/fullstackdevelopment" element={<FullStackDevelopment/>}></Route>
<Route path="/datascience" element={<DataScience/>}></Route>
<Route path="/cybersecurity" element={<CyberSecurity/>}></Route>
<Route path="/career" element={<Career/>}></Route>
  </Routes>
    
    </BrowserRouter>
  );
}

export default App;




