import Navbar from '../Component/Home/Navbar';
import Footer from '../Component/Home/Footer';
import ESGHero from '../Component/ESG/ESGHero';
import ESGIntroduction from '../Component/ESG/ESGIntroduction';
import ESGPillars from '../Component/ESG/ESGPillars';
import ESGReportDownload from '../Component/ESG/ESGReportDownload';
import ESGCommitment from '../Component/ESG/ESGCommitment';
import ESGPartners from '../Component/ESG/ESGPartners';
import ESGJoinTeam from '../Component/ESG/ESGJoinTeam';

const ESGPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ESGHero />
      <ESGIntroduction />
      <ESGPillars />
      <ESGReportDownload />
      <ESGCommitment />
      <ESGPartners />
      <ESGJoinTeam />
      <Footer />
    </div>
  );
};

export default ESGPage;
