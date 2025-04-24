import React from "react";
import "./App.css";
import Hero from "../src/Components/Hero";
import Program from "./Components/Program";
import Reasion from "./Components/Reasion";
import Plans from "./Components/Plans";
import Testimonials from "./Components/Testimonials";
import Join from "./Components/Join";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasion />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
