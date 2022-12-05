import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav";
import firebase from "firebase/compat/app";
import { logout, selectUser } from "../features/userSlice";
import "./ProfileScreen.css";
import PlansScreen from "./PlansScreen";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => {
                  firebase.auth().signOut();
                  dispatch(logout());
                }}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
