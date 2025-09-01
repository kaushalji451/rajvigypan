
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const projectRef = useRef(null);
  const clientsRef = useRef(null);
  

  const navRefs = { homeRef, aboutRef, contactRef,servicesRef,projectRef,clientsRef };
  return (
    <>
      <Navbar navRefs={navRefs} />
      <Component {...pageProps} navRefs={navRefs} />
      <Footer />
    </>
  );
}
