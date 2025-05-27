import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />  
      <Footer />
    </>
  );
};

export default App;
