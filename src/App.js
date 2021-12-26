import './App.css';
import TopSocial from "./components/TopSocial";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RatesPage from "./components/RatesPage";
import TeachersPage from "./components/TeachersPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <TopSocial />
        <Navbar />
        <Banner />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/rates"><RatesPage /></Route>
          <Route path="/teachers"><TeachersPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
