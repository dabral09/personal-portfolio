

import Contact from "./components/Contact";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const[ratio, setRatio] = useState(window.innerWidth/window.innerHeight)


  useEffect(() =>{
    const resizeRation =() =>{
      setRatio(window.innerWidth/window.innerHeight)
    };

    window.addEventListener("resize", resizeRation);

    return () => {
      window.removeEventListener("resize", resizeRation)
    }
  },[ratio]);


  return ratio <2.5? (
    <>
    <HeaderPhone  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
    <Home ratio={ratio} />
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Toaster/>{/*this is imported for success msg send in contact submit  */}
    </>
  ) : (<em id="customMessage">Please change the ratio to View</em>
  );
}

export default App;
