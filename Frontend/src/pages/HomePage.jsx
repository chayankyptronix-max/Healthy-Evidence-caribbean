import Navbar from '../Component/Home/Navbar';
import Hero from '../Component/Home/Hero';
import Insights from '../Component/Home/Insights';
import Service from '../Component/Home/Service';
import News from '../Component/Home/News';
import Testimonials from '../Component/Home/Testimonials';
import ImpactStats from '../Component/Home/ImpactStats';
import AchievementBanner from '../Component/Home/AchievementBanner';
import JoinUs from '../Component/Home/JoinUs';
import Footer from '../Component/Home/Footer';

function Home(){
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

export default Home;