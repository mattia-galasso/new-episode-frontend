import { Link } from "react-router";

import posterPlaceholder from "../assets/img/no_image_available.png";

export default function TvSeriesHomeCard({ tvSeries }) {
  return (
    <>
      <Link
        to={`/serie-tv/${tvSeries.slug}`}
        className="tv-series-home-card text-decoration-none"
      >
        <div className="tv-series-home-card-image">
          <img
            src={tvSeries.poster || posterPlaceholder}
            alt={tvSeries.title}
          />

          <div className="tv-series-home-card-content">
            <h3>{tvSeries.title}</h3>
            <span>{tvSeries.start_year}</span>
          </div>
        </div>
      </Link>
    </>
  );
}
