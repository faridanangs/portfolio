import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/header/header";
import Home from "./Component/home/home";
import About from "./Component/about/about";
import Project from "./Component/project/project";
import Skils from "./Component/skils/skils";
import Contact from "./Component/contact/contact";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/skils" element={<Skils/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

