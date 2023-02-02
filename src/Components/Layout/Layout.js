import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = (props) => {
  return <>
    <Navigation/>
      {props.children}
    <Footer/>
  </>
}

export default Layout;