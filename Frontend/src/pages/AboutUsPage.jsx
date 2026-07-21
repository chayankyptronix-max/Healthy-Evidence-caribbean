import AboutUsFooter from '../Component/AboutUS/AboutUsFooter';
import CallToActionSection from '../Component/AboutUS/CallToAction';
import CommunityImpactSection from '../Component/AboutUS/CommunityImpactSection';
import ImpactBridge from '../Component/AboutUS/ImpactBridge';
import HeroSection from '../Component/AboutUS/HeroSection';
import LeadershipSection from '../Component/AboutUS/LeaderShip';
import StoryTimelineSection from '../Component/AboutUS/StoryTimeline';
import Navbar from '../Component/Home/Navbar';


function AboutUs(){
    return(
        <div className="w-full">
            <Navbar />
            <HeroSection/>
            <LeadershipSection/>
            <StoryTimelineSection/>
            <CallToActionSection/>
            <ImpactBridge/>
            <CommunityImpactSection/>
            <AboutUsFooter/>
        </div>
    )
}
export default AboutUs;