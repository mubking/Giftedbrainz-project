import Navbar from "../Components/lading_page/Navbar";
import Home from "../Components/lading_page/Home";
import About from "../Components/lading_page/About";
import How from "../Components/lading_page/How";
import Rectangle from "../Components/lading_page/Rectangle";
import Course from "../Components/lading_page/Course";
import Participate from "../Components/lading_page/Participate";
import Features from "../Components/lading_page/Features";
import Take from "../Components/lading_page/Take";
import Footer from "../Components/lading_page/Footer";
// import Face from "@/Components/lading_page/Face";

export default function page() {
  return (
   <>
    <Navbar/>
    <Home/>
    <About/>
    <How/>
    <Rectangle/>
    <Course/>
    <Participate/>
    <Features/>
    <Take/>
    <Footer/>
   </>
  )
}
