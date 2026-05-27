import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      <Navbar />

      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />

    </main>
  );
}

export default App;