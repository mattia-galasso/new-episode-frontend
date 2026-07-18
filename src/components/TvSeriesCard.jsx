import { Link } from "react-router";

import posterPlaceholder from "../assets/img/no_image_available.png";

export default function TvSeriesCard({ tvSeries }) {
  return (
    <Link
      to={`/serie-tv/${tvSeries.slug}`}
      className="tv-series-card text-decoration-none"
    >
      <div className="tv-series-card-image">

        <img
          src={tvSeries.poster || posterPlaceholder}
          alt={tvSeries.title}
        />

        <div className="tv-series-card-overlay">
          <span>Scopri di più</span>
        </div>

      </div>

      <div className="tv-series-card-body">

        <h3>{tvSeries.title}</h3>

        <p>
          {tvSeries.start_year} • {tvSeries.status}
        </p>

      </div>
    </Link>
  );
}