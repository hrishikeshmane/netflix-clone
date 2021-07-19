import React, { useEffect } from 'react';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileSceen from './screens/ProfileSceen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,   
        }));
      } else {
        //Logged Out
        dispatch(logout());
      }
    });
    
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Switch>
              <Route exact path="/">
                <HomeScreen />
                </Route>
                <Route exact path="/profile">
                <ProfileSceen />
              </Route>
            </Switch>     
          )
        }
      </Router>
    </div>
  );
}

export default App;
