import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="titlename">
            HABIT X
          </a>
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
              <button
                className="btn btn-outline-success"
                href="#"
                id="loginbtn"
              >
                LOGIN
              </button>
              <button
                className="btn btn-outline-success"
                href="#"
                id="signupbtn"
              >
                SIGNUP
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
