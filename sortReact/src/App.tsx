import "./components/css/bootstrap.min.css"; //global css imports
import "./components/css/style.css";

//all imports must start with capital letter
import Navbar from "./components/navBar";
import HomeBody from "./components/homeBody";
import Footer from "./components/footer";
import HomeJsLibs from "./components/homeJsLibs";
import Events from "./components/events";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <HomeBody />
      <HomeJsLibs />
    </>
  );
}

function EventsFn() {
  return (
    <>
      <Events />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsFn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
