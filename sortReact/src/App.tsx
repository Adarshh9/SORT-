import "./components/css/bootstrap.min.css";
import "./components/css/style.css";

import Header from "./homeHeader"; //all imports must start with capital letter
import Navbar from "./components/navBar";
import HomeBody from "./components/homeBody";
import Footer from "./components/footer";
import HomeJsLibs from "./components/homeJsLibs";

function App() {
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

export default App;
