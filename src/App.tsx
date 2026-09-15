import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="app-container">
      {/* Ornament strip */}
      <div className="top-strip" />

      {/* Navigation */}
      <nav className="main-nav">
        <Link to="/" className="nav-brand">
          <img src="/logo.png" alt="Sriman Madhava Teertha Matha Tambihalli" className="nav-logo-img" />
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/privacypolicy" className="nav-link">Privacy Policy</Link>
        </div>
      </nav>

      {/* Page content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2026 Sriman Madhava Teertha Matha Tambihalli. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/privacypolicy" className="footer-link">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
