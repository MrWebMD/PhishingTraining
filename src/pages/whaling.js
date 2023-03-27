import Super from "@/components/Layout/Super";
import Head from "next/head";

const Whaling = () => {
  return (
    <>
      <Head>
        <title>PhishED | Whaling</title>
      </Head>
      <Super>
        <h1 className="contentHeading">
          A case study of an accountant phished at google
        </h1>
      </Super>
    </>
  );
};

export default Whaling;
