import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Education from "./components/Experience/Experience";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Services />
      <Education />
      <Contact />  
      <Footer />
    </>
  );
};

export default App;
