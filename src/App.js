import './App.css';
import TopSocial from "./components/TopSocial";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Offerings from './components/Offerings';
import Teachers from "./components/Teachers";
import Testimonials from './components/Testimonials';
import Getstarted from "./components/Getstarted";
import Footer from "./components/Footer";
import FreeTrialModal from "./components/FreeTrialModal";


function App() {
  return (
    <div className="App">
      <TopSocial />
      <Navbar />
      <Banner />
      <Offerings />
      <Teachers />
      <Testimonials />
      <Getstarted />
      <Footer />
      <FreeTrialModal />
    </div>
  );
}

export default App;
