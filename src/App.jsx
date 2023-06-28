import { About } from "./components/About";
import { Blogs } from "./components/Blogs";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { Styles } from "./components/Styles";
import { Visit } from "./components/Visit";
import "./normalize.css";
import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Styles />
      <Pricing />
      <Blogs />
      <Visit />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
