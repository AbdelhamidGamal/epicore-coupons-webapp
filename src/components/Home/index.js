import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

import { store } from "../../index";
import { handleSignOut } from "../../actions/auth";

import { useSelector } from "react-redux";

function Home() {
  const userName = useSelector((state) => state.auth.user?.name || "Dear");

  const logout = () => {
    store.dispatch(handleSignOut());
  };

  return (
    <div id="home">
      <h1>
        Hello{" "}
        {userName === "Dear" ? (
          "Dear"
        ) : (
          <>
            {userName}
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </>
        )}
        , What do you want to do?
      </h1>
      <Link to="/create">Create A Coupon</Link>
      <Link to="/check">Check A Coupon</Link>
    </div>
  );
}

export default Home;
