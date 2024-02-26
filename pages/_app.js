import Navbar from "../componants/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />;
  </> 
}
