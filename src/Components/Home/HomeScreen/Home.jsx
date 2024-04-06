import React from "react";
import HeroSection from "../../HeroSection";
import MySkills from "../../MySkills";
import About from "../../About";
import MyPortfolio from "../../MyPortfolio";
import Testimonials from "../../Testimonials";
import Contact from "../../Contact";
import Footer from "../../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <About />
      <MyPortfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
