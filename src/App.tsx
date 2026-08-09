import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Software from "./components/Software";
import Publications from "./components/Publications";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
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
