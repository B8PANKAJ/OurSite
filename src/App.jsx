import react from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import Alert1 from "./Components/Alert1";
import Footer from "./Components/Footer";
import ALert2 from "./Components/ALert2";
import WebDesign from "./Pages/WebDesign";
import MobileApp from "./Pages/MobileApp";
import Digitalmarketing from "./Pages/Digitalmarketing";
import Videoediting from "./Pages/Videoediting";
import Ai from "./Pages/Ai";
import SocialMedia from "./Pages/SocialMedia";
import Blogpage1 from "./Pages/Blogpage1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Alert1 />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/:eefg475" element={<Blogpage1 />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route
              path="/services/Webdevelopment-design"
              element={<WebDesign />}
            />
            <Route
              path="/services/Moblie-Application"
              element={<MobileApp />}
            />
            <Route
              path="/services/DigitalMarketing"
              element={<Digitalmarketing />}
            />
            <Route path="/services/Video-Editing" element={<Videoediting />} />
            <Route path="/services/Ai" element={<Ai />} />
            <Route path="/services/Social-Media" element={<SocialMedia />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <ALert2 />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
