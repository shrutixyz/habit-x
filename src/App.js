import "./App.scss";
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";

import Nav from "./components/Nav/Nav";
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import {auth} from './utils/firebase';
import AudioList from './pages/AudioList';
import Audio from './pages/Audio'

import Dashboard from "./pages/Dashboard/Dashboard";
import NewHabit from "./pages/NewHabit/NewHabit";
import HabitSocial from "./pages/HabitSocial/HabitSocial";
import ArView from './components/ArView'


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
          </Route>  */}
          <Route exact path="/">
            <Onboarding user={user}/>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route  path="/audio/:url">
            <Audio />
          </Route>
          <Route  path="/audio-main">
            <AudioList />
          </Route>
          <Route exact  path="/ar/:url/:scene">
            <ArView />
          </Route>
          
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/newhabit">
            <NewHabit />
          </Route>
          <Route path="/habit/social">
            <HabitSocial />

          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
