import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skill from "./Components/Skill";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skill />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;