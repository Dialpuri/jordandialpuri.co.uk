import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Publications from "./components/Publications.tsx";
import Footer from "./components/Footer.tsx";


export default function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Publications/>
            <Footer/>
        </>
    );
}