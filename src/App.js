import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Nav from "./components/Nav";
import Register from './components/Register'
import Login from './components/Login'

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
          <Route exact path="/register">
            <Register />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
