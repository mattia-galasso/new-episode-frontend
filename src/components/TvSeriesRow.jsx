import { useEffect, useState } from "react";
import TvSeriesHomeCard from "./TvSeriesHomeCard";
import axios from "axios";

export default function TvSeriesRow({ title, param }) {
  const [tvSeries, setTvSeries] = useState();

  function homepageSection() {
    let baseUrl = `${import.meta.env.VITE_API_URL}/api/tvseries/homepage`;

    axios
      .get(baseUrl + `?section=${param}`)
      .then((res) => {
        setTvSeries(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  useEffect(homepageSection,[])

  if (!tvSeries) return

  return (
    <>
      <section className="tv-series-row">
        <div className="tv-series-row-header">
          <h2>{title}</h2>

          {/* TODO: Pulsante "Vedi tutte" */}
        </div>

        <div className="homepage-divisor"></div>

        <div className="row g-4">
          {tvSeries.map((tvSeries) => (
            <div key={tvSeries.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <TvSeriesHomeCard tvSeries={tvSeries} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
