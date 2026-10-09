import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page fade-in">
      <div className="not-found-card">
        <div className="not-found-content">
          <span className="not-found-ornament">✦</span>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <div className="not-found-divider"></div>
          <p className="not-found-description">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="not-found-btn">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
