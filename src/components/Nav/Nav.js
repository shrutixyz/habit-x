import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav
      style={{ zIndex: "100" }}
      className="navbar navbar-expand-lg navbar-light bg-light py-3"
    >
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-brand" id="titlename">
            HABIT X
          </span>
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <Link to="/login">
              <button
                className="btn btn-outline-success loginButton mx-4 px-3"
                id="loginbtn"
              >
                LOGIN
              </button>
            </Link>
            <Link to="/register">
              <button
                className="btn btn-outline-success ml-4 signupButton px-3"
                id="signupbtn"
              >
                SIGNUP
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
