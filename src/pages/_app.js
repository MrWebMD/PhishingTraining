// import '@/styles/globals.css'
import Layout from "@/components/Layout/Layout";
import "@/styles/Theme.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
