import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="./logo_nextepisode.png"
            alt="NextEpisode Logo"
            className="navbar-logo"
          />
        </Link>

        {/* Collapse */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Menu */}
          <div className="navbar-menu">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/serie-tv" className="nav-link">
                  Serie TV
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/attori" className="nav-link">
                  Attori
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Azioni */}
          <div className="navbar-search-container">
            <form className="my-3 my-lg-0 w-100 search-box">
              <div className="navbar-search-wrapper ">
                <i className="bi bi-search navbar-search-icon"></i>

                <input
                  type="search"
                  className="form-control navbar-search"
                  placeholder="Cerca serie TV, attori, generi..."
                />

                {/* TODO: Gestione ricerca */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
