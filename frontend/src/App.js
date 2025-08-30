// frontend/src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuNavegacao from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConsumerLawPage from './pages/ConsumerLawPage';
import FamilyLawPage from './pages/FamilyLawPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      {/* ↓↓↓ A NOSSA MUDANÇA ESTÁ AQUI ↓↓↓ */}
      <div className="site-container"> 
        <MenuNavegacao />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/consumidor" element={<ConsumerLawPage />} />
            <Route path="/familia" element={<FamilyLawPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {/* ↑↑↑ E AQUI ↑↑↑ */}
    </Router>
  );
}

export default App;