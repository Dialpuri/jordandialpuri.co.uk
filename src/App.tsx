import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Software from "./components/Software";
import Publications from "./components/Publications";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  useLayoutEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Software />
        <Publications />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
