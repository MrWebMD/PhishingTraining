import Footer from "./Footer";
import Navigation from "./Navigation";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import AOSWrapper from "../AOS";

const Layout = (props) => {
  return (
    <>
      <ReactNotifications />
      <Navigation />
      <AOSWrapper />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
