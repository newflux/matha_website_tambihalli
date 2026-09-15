import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* ── Hero + Swamy — all above the fold ── */}
      <section className="hero fade-in">
        <h1 className="hero-title">Sriman Madhava Teertha Matha</h1>
        <p className="hero-subtitle">Tambihalli</p>
        <div className="hero-divider" aria-hidden="true" />

        {/* Swamy image pulled directly into the hero */}
        <div className="swamy-frame">
          <img
            src="/swamy.jpeg"
            alt="His Holiness, Sriman Madhava Teertha Swamiji, Tambihalli Matha"
            className="swamy-img"
          />
        </div>
        <p className="swamy-caption">
          Peethadhipathi — <strong>Vidhyavallabha Madhava Teertharu</strong><br />
          Sriman Madhava Teertha Matha, Tambihalli
        </p>

        <p className="hero-tagline">
          A sacred institution of devotion, Seva, and spiritual guidance,
          rooted in the ancient Dvaita Vedanta tradition.
        </p>
      </section>

      {/* ── App Download ── */}
      <section className="app-section">
        <h2 className="app-section-heading">Official Devotee App</h2>
        <p className="app-section-text">
          Book Seva, offer Kanike, and receive Prasadam — all from the sanctity of your home.
        </p>
        <a
          href="#"
          className="app-badge-link"
          aria-label="Get it on Google Play"
          onClick={(e) => e.preventDefault()}
        >
          <img
            src="/png-clipart-app-store-google-play-apple-apple-text-logo.png"
            alt="Get it on Google Play"
            className="app-badge-img"
          />
        </a>
      </section>
    </>
  );
};

export default LandingPage;
