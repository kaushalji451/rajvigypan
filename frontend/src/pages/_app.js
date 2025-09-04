
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
  const contactRef = useRef(null);
  const navRefs = {contactRef};
  return (
    <>
      <Navbar navRefs={navRefs} />
      <Component {...pageProps} navRefs={navRefs} />
      <Footer />
    </>
  );
}
