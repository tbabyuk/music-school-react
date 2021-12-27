import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopSocial from "./components/TopSocial";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RatesPage from "./components/RatesPage";
import TeachersPage from "./components/TeachersPage";
import OurMissionPage from './components/OurMissionPage';
import OurStoryPage from './components/OurStoryPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import FooterSection from './components/FooterSection';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <TopSocial />
        <Navbar />
        <Banner />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/rates"><RatesPage /></Route>
          <Route path="/teachers"><TeachersPage /></Route>
          <Route path="/gallery"><GalleryPage /></Route>
          <Route path="/mission"><OurMissionPage /></Route>
          <Route path="/story"><OurStoryPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
        </Switch>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
