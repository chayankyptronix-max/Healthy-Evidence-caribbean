import { useState } from 'react'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Insights from './Component/Insights';
import Service from './Component/Service';
import News from './Component/News';
import "./index.css";
import Testimonials from './Component/Testimonials';
import ImpactStats from './Component/ImpactStats';
import AchievementBanner from './Component/AchievementBanner';
import JoinUs from './Component/JoinUs';
import Footer from './Component/Footer';

function App() {

  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Insights/>
      <Service/>
      <News />
      <Testimonials/>
      <ImpactStats/>
      <AchievementBanner/>
      <JoinUs/>
      <Footer/>

    </div>
  )
}

export default App
