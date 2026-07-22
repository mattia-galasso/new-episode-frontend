import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";

// TVSERIES CSS
import "../assets/css/tvseries.css";

import TvSeriesCard from "../components/TvSeriesCard";

export default function TvSeriesPage() {
  const [tvSeries, setTvSeries] = useState(null);
  const [platformList, setPlatformList] = useState([]);
  const [genreList, setGenreList] = useState([]);

  // Query Params
  const [searchParams, setSearchParams] = useSearchParams();

  const order = searchParams.get("order") || "";
  const status = searchParams.get("status") || "";
  const newReleases = searchParams.get("newReleases") === "true";
  const platforms = searchParams.get("platforms")
    ? searchParams.get("platforms").split(",")
    : [];

  const genres = searchParams.get("genres")
    ? searchParams.get("genres").split(",")
    : [];

  function updateSearchParam(key, value) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  }

  function updateMultiSearchParam(key, value) {
    const params = new URLSearchParams(searchParams);

    const currentValues = params.get(key);
    const values = currentValues ? currentValues.split(",") : [];


    if (values.includes(value)) {
      const index = values.indexOf(value);
      values.splice(index, 1);
    } else {
      values.push(value);
    }

    if (values.length > 0) {
      params.set(key, values.join(","));
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  }

  function getTvSeries() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/tvseries`, {
        params: {
          order,
          status,
          newReleases,
          platforms,
          genres,
        },
      })
      .then((res) => {
        setTvSeries(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getPlatforms() {
     console.log("Richiesta:", {
    order,
    status,
    newReleases,
    platforms,
    genres,
    });
    
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/platforms`)
      .then((res) => {
        console.log("Risposta:", res.data.results.total);
        setPlatformList(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getGenres() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/genres`)
      .then((res) => setGenreList(res.data.results))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    getPlatforms();
    getGenres();
  }, []);

  useEffect(getTvSeries, [order, status, newReleases, platforms, genres]);

  if (!tvSeries) return null;

  return (
    <>
      <section className="tv-series-page">
        <div className="container-custom">
          {/* Header */}

          <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
            <div>
              <h1 className="mb-1">Serie TV</h1>

              <p className="text-secondary mb-0">{tvSeries.total} risultati</p>
            </div>
          </div>

          {/* FILTRI */}

          <div className="tv-series-toolbar d-flex justify-content-end flex-wrap gap-2 mb-4">
            {/* NUOVE USCITE */}
            <button
              className={`btn ${newReleases ? "btn-light text-dark" : "btn-outline-light"}`}
              onClick={() =>
                updateSearchParam("newReleases", !newReleases ? "true" : "")
              }
            >
              Nuove uscite
            </button>

            {/* ORDINAMENTO */}
            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Ordinamento
              </button>

              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => updateSearchParam("order", "az")}
                  >
                    Dalla A alla Z
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => updateSearchParam("order", "za")}
                  >
                    Dalla Z alla A
                  </button>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => updateSearchParam("order", "recent")}
                  >
                    Più recenti
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => updateSearchParam("order", "old")}
                  >
                    Meno recenti
                  </button>
                </li>
              </ul>
            </div>

            {/* STATO */}
            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Stato
              </button>

              <div className="dropdown-menu dropdown-menu-dark p-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="all"
                    checked={status === ""}
                    onChange={() => updateSearchParam("status", "")}
                  />

                  <label className="form-check-label" htmlFor="all">
                    Tutte
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="ongoing"
                    checked={status === "ongoing"}
                    onChange={() => updateSearchParam("status", "ongoing")}
                  />

                  <label className="form-check-label" htmlFor="ongoing">
                    In corso
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="ended"
                    checked={status === "ended"}
                    onChange={() => updateSearchParam("status", "ended")}
                  />

                  <label className="form-check-label" htmlFor="ended">
                    Concluse
                  </label>
                </div>
              </div>
            </div>

            {/* PIATTAFORME */}
            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Piattaforme
              </button>

              <div className="dropdown-menu dropdown-menu-dark p-3 filter-dropdown">
                <div className="d-flex flex-wrap gap-2">
                  {platformList.map((platform) => (
                    <button
                      key={platform.id}
                      type="button"
                      className={`btn btn-sm ${platforms.includes(String(platform.id)) ? "btn-light text-dark" : "btn-outline-secondary"}`}
                      onClick={() =>
                        updateMultiSearchParam("platforms", String(platform.id))
                      }
                    >
                      {platform.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* GENERI */}
            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Generi
              </button>

              <div className="dropdown-menu dropdown-menu-dark p-3 filter-dropdown">
                <div className="d-flex flex-wrap gap-2">
                  {genreList.map((genre) => (
                    <button
                      key={genre.id}
                      type="button"
                      className={`btn btn-sm ${genres.includes(String(genre.id)) ? "btn-light text-dark" : "btn-outline-secondary"}`}
                      onClick={() =>
                        updateMultiSearchParam("genres", String(genre.id))
                      }
                    >
                      {genre.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CARDS */}

          <div className="row g-4">
            {tvSeries.data.map((tvSeries) => (
              <div
                key={tvSeries.id}
                className="col-6 col-md-4 col-lg-3 col-xl-2"
              >
                <TvSeriesCard tvSeries={tvSeries} />
              </div>
            ))}
          </div>

          {/* PAGINAZIONE */}

          <div className="d-flex justify-content-center mt-5"></div>
        </div>
      </section>
    </>
  );
}
