import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const { userReducer, type } = props;
  //console.log(props)
  if (type === "guest" && userReducer.loggedIn) {
    return <Redirect to="/home" />;
  } else if (type === "private" && !userReducer.loggedIn) {
    return <Redirect to="/login" />;
  } 

  return <Route {...props} />;
};

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps)(AuthRoute);