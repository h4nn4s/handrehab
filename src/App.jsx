import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Diagnoses from "./pages/Diagnoses";
import Home from "./pages/Home";
import References from "./pages/References";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter basename="/handrehab">
      <div className="app-layout">
        <Header />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tjanster" element={<Services />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/diagnoser" element={<Diagnoses />} />
            <Route path="/referenser" element={<References />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;