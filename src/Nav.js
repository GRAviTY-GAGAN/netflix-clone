import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const trasitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // window.addEventListener("scroll", trasitionNavBar);
  useEffect(() => {
    // for me just the above single line of code is also working dont know why he is using it inside useEffect Hook
    window.addEventListener("scroll", trasitionNavBar);
    return () => window.removeEventListener("scroll", trasitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="NETFLIX"
        />
        <img
          onClick={() => navigate("./profile")}
          className="nav__avatar"
          src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589"
          alt="AVATAR"
        />
      </div>
    </div>
  );
};

export default Nav;
