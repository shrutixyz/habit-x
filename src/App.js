import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Nav from "./components/Nav";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewHabit from "./pages/NewHabit/NewHabit";

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/newhabit">
            <NewHabit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
