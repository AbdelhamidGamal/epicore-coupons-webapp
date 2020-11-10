import React, { useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux";
import { handleFetchProfile } from "../actions/auth";

import ProtectedRoute from "./auth/ProtectedRoute";

import Home from "./Home";
import Login from "./auth/Login";
import CreateCode from "./CreateCoupon";
import CheckCode from "./CheckACoupon";

function App({ handleFetchProfile }) {
  useEffect(() => {
    handleFetchProfile();
  }, [handleFetchProfile]);

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <ProtectedRoute exact path="/create" component={CreateCode} />
      <Route exact path="/check" component={CheckCode} />
      <Route exact path="/auth/login" component={Login} />
    </Router>
  );
}

export default connect(null, { handleFetchProfile })(App);
