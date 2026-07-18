import Hero from "../components/Hero";
import TvSeriesRow from "../components/TvSeriesRow";

// HOMEPAGE CSS
import '../assets/css/homepage.css'

export default function Homepage() {
  return (
    <>
      <Hero />

      <section className="homepage-section">
        <div className="container-custom">

          <TvSeriesRow title="Nuove uscite" />

          <TvSeriesRow title="In corso" />

          <TvSeriesRow title="Concluse" />

        </div>
      </section>
    </>
  );
}