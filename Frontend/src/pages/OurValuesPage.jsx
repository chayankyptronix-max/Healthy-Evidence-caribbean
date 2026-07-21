import React, { useEffect } from "react";
import Navbar from "../Component/Home/Navbar";
import Footer from "../Component/Home/Footer";
import HeroSection from "../Component/OurValues/HeroSection";
import Philosophy from "../Component/OurValues/Philosophy";
import CoreValues from "../Component/OurValues/CoreValues";
import WhyItMatters from "../Component/OurValues/WhyItMatters";
import JoinMission from "../Component/OurValues/JoinMission";
import ClosingQuote from "../Component/OurValues/ClosingQuote";

const OurValuesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F8FAF8] min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <Philosophy />
        <CoreValues />
        <WhyItMatters />
        <JoinMission />
        <ClosingQuote />
      </main>

      <Footer />
    </div>
  );
};

export default OurValuesPage;
