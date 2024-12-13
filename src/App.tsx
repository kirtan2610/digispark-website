import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { CaseStudy } from './pages/CaseStudy';
import { CaseStudy2 } from './pages/CaseStudy2';
import { CaseStudy3 } from './pages/CaseStudy3';
import ScrollToTop from './components/ScrollToTop';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/CaseStudy" element={<CaseStudy />} />
            <Route path="/CaseStudy2" element={<CaseStudy2 />} />
            <Route path="/CaseStudy3" element={<CaseStudy3 />} />
            <Route path="/case-study/koa-cafe" element={<CaseStudy3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;