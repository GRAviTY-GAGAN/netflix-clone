import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import firebase from "firebase/compat/app";
import firebaseConfig from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
      //if the page is refreshed after signin then user will be logged out to avoid that using onAuthStateChanged function from firebase.
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
    //  the advantage of using onAuthStateChanged is that it provides a powerful function called unsubscribe.
    // if the component was ever to unmount we dont have to duplicate another listner we just have to detach the old one and attach the newone.
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {user == null ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/test" element={<h1>HOW ARE YOU</h1>} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
