import "./components/css/bootstrap.min.css";
import "./components/css/style.css";

import Header from "./homeHeader"; //all imports must start with capital letter
import Navbar from "./components/navBar";
import HomeBody from "./components/homeBody";
import Footer from "./components/footer";
import HomeJsLibs from "./components/homeJsLibs";
import Events from "./components/events";
import EventsHeader from "./components/eventsHeader";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <HomeBody />
      <Footer />
      <HomeJsLibs />
    </>
  );
}

function EventsFn() {
  return (
    <>
      <EventsHeader />
      <Navbar />
      <Events />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsFn />} />
      </Routes>
    </Router>
    // <Events/>
  );
}

export default App;
