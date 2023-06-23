import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router";
import { authActions } from "../component/store";
import Cookie from "js-cookie";

import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // put the name of the slice
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());

    Cookie.remove("user");

    window.location.reload(); // FIXME This has to be replaced with Cookie.remove('user', path=('') ...)

    navigate("/login");
  };
  return (
    <div className="navbar">
      {!isAuthenticated ? (
        <>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/signup">
            Signup
          </Link>
        </>
      ) : (
        <>
          <Link className="link" to="/propertyCreate">
            PropertyCreate
          </Link>
          <Link className="link" to="/propertyList">
            PropertyList
          </Link>
          <Link className="link" to="/propertyOffers">
            PropertyOffers
          </Link>
          <button className="but" onClick={logoutHandler}>Logout</button>Í
        </>
      )}
    </div>
  );
};

export default NavBar;
