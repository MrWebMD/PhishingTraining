// import '@/styles/globals.css'
import Layout from "@/components/Layout/Layout";
import "@/styles/Theme.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
