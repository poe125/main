// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureTabs from "./components/FeatureTabs";
import About from "./components/About";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import featureTabsData from "./data/featureTabsData";

function App() {
  return (
    <div className="App">
      <Particles />
      <Navbar />
      <Hero />
      <FeatureTabs tabs={featureTabsData} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
