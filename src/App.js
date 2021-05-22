import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/">
            <Onboarding />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
