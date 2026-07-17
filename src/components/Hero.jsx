import { Link } from "react-router";

import bannerPlaceholder from "../assets/img/banner_no_image_available.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={bannerPlaceholder} alt="Banner" className="hero-banner" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-info">
          <span className="hero-year">2008 • Terminata</span>

          <h1>Breaking Bad</h1>

          <div className="hero-genres">
            <span>Crime</span>
            <span>Dramma</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, fugit.
          </p>

          <Link to="/" className="btn btn-primary">
            Scopri di più
          </Link>

          {/* TODO: Link dettaglio serie */}
        </div>
      </div>
    </section>
  );
}
