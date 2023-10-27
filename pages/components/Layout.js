import Aboutme from "./Aboutme";
import ContactAD from "./ContactAD";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

const Layout = () => {
    return ( 
        <>
        <Header />
        <Home />
        <Aboutme/>
        <ContactAD/>
        <Skills/>
        <Projects/>
        <Services/>
        <Contact/>
        <Footer/>
      
        </>
     );
}
 
export default Layout;