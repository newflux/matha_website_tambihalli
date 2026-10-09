import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ResetPassword from './pages/ResetPassword';
import DataDeletion from './pages/DataDeletion';

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
          <Link to="/terms" className="nav-link">Terms and Conditions</Link>
        </div>
      </nav>

      {/* Page content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/reset-password.html" element={<ResetPassword />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2026 Sriman Madhava Teertha Matha Tambihalli. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/privacypolicy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          <Link to="/data-deletion" className="footer-link">Data Deletion</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
