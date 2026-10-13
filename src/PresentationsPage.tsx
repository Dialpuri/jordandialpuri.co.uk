import Navbar from "./components/Navbar";
import Presentations from "./components/Presentations";
import Footer from "./components/Footer";

export default function PresentationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Presentations />
      </main>
      <Footer />
    </>
  );
}
