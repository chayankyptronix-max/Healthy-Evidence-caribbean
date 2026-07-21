import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import OurValues from "./pages/OurValuesPage";
import ESGPage from "./pages/ESGPage";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-values" element={<OurValues />} />
          <Route path="/esg" element={<ESGPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
