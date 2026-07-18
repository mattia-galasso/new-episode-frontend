import TvSeriesHomeCard from "./TvSeriesHomeCard";

export default function TvSeriesRow({ title }) {
  const fakeSeries = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    title: `Serie TV ${index + 1}`,
    slug: `serie-tv-${index + 1}`,
    poster: null,
    start_year: 2026,
    status: "In produzione",
  }));

  return (
    <>
      <section className="tv-series-row">
        <div className="tv-series-row-header">
          <h2>{title}</h2>

          {/* TODO: Pulsante "Vedi tutte" */}
        </div>

        <div className="homepage-divisor"></div>

        <div className="row g-4">
          {fakeSeries.map((tvSeries) => (
            <div key={tvSeries.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <TvSeriesHomeCard tvSeries={tvSeries} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
