import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
