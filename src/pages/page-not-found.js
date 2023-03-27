import Super from "@/components/Layout/Super";
import Head from "next/head";

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>PhishED | Page Not Found</title>
      </Head>
      <Super>
        <h1 className="contentHeading">Page Not Found</h1>
      </Super>
    </>
  );
};

export default PageNotFound;
