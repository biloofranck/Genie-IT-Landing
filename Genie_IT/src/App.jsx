import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OurCreations from "./Components/OurCreations";
import OurTeam from "./Components/OurTeam";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <About />
      <Service />
      <OurTeam />
      <OurCreations />
      
      <Testimonials />

      <Footer />
    </>
  );
}

export default App;
