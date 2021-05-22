import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Nav from "./components/Nav";
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
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
          <Route  path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
