import Aboutme from "./Aboutme";
import ContactAD from "./ContactAD";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";

const Layout = () => {
    return ( 
        <>
        <Header />
        <Home />
        <Aboutme/>
        <ContactAD/>
        <Services/>
        <Footer/>
        </>
     );
}
 
export default Layout;