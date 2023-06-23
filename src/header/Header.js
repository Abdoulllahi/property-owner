import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../component/store";
import { Link } from "react-router-dom";
import "react-router";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // put the name of the slice

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/login");
  };

  return (
    <nav>
      <header className="header">
        {isAuthenticated ? (
          <ul>
            <li>
              <Link to="/">My Products</Link>
            </li>

            <li>
              <Link to="/counter"> Counter </Link>
            </li>
            <li>
              <Link to="/user"> Profile </Link>
            </li>

            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        ) : null}
      </header>
    </nav>
  );
};

export default Header;
