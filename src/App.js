import "./App.scss";
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Nav from "./components/Nav";
import Register from './components/Register'
import Login from './components/Login'
import {auth} from './utils/firebase';
import AudioList from './pages/AudioList';
import Audio from './pages/Audio'
import ARView from './components/ARview'

function App() {

  const [user, setuser] = useState(null)

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
        const user = {
          uid : userAuth.uid,
          email: userAuth.email
        }

        if(userAuth) {
          console.log(userAuth);
          setuser(user)
        }else{
          setuser(null)
        }
      }
    )

    return unsubscribe;
    
  }, [])

  return (
    <Router>
      <div>
        <Nav />
        
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/">
            <Onboarding user={user}/>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/audio/:url">
            <Audio />
          </Route>
          <Route  path="/audio-main">
            <AudioList />
          </Route>
          <Route  path="/ar">
            <ARView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
