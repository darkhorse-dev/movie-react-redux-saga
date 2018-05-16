import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AboutPage from "./AboutPage/AboutPage";
import LoginPage from "./Auth/LoginPage/LoginPage";
import RegistrationPage from "./Auth/RegistrationPage/RegistrationPage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import "./MovieApp.scss";
import NoFoundPage from "./NoFoundPage/NoFoundPage";
import SearchPage from "./SearchPage/SearchPage";
import AuthRoute from "../utility/AuthRoute";

export default class MovieApp extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header />
          <div className="content">
            <Switch>
              <AuthRoute exact path="/" component={HomePage} />
              <AuthRoute path="/about" component={AboutPage} />
              <AuthRoute path="/search" component={SearchPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/registration" component={RegistrationPage} />
              <Route component={NoFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
