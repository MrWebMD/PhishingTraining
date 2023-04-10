import Footer from "./Footer";
import Navigation from "./Navigation";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
// import AOSWrapper from "../AOS";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ReactNotifications />
      <Navigation />
      {/* <AOSWrapper /> */}
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
