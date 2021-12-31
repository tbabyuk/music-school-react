import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopSocial from "./components/TopSocial";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RatesPage from "./components/RatesPage";
import TeachersPage from "./components/TeachersPage";
import ReviewsPage from "./components/ReviewsPage";
import OurMissionPage from './components/OurMissionPage';
import OurStoryPage from './components/OurStoryPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import FooterSection from './components/FooterSection';
import ScrollToTop from './components/ScrollToTop';
import ErrorPage from "./components/ErrorPage";
import Lessons from "./components/Lessons";
import FreeTrialModal from "./components/modals/FreeTrialModal";
import InfoPackModal from "./components/modals/InfoPackModal";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <TopSocial />
        <FreeTrialModal />
        <InfoPackModal />
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rates" element={<RatesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/mission" element={<OurMissionPage />} />
          <Route path="/story" element={<OurStoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/lessons/:instrument" element={<Lessons />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
