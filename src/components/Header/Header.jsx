import React, { Component } from 'react'

import "./Header.scss";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

import { isLoggedIn } from "../../actions/actions";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class Header extends Component {


  componentWillMount() {
    this.props.isLoggedIn(localStorage.getItem('userAuth') !== null ? true : false);
  }

  handleLogo = () => {
    this.props.history.push("/");
  }


  handleLogout = () => {
    localStorage.removeItem("userAuth")
    this.props.isLoggedIn(false)
    this.props.history.push("/login");
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-xm-12 col-sm-12 col-md-12 col-lg-6">
              {this.props.is_logged_in ?
                <nav>
                  <span className="logo" onClick={this.handleLogo}></span>
                  <ul className="header-menu">
                    <li><NavLink to="/" exact activeClassName="active">Главаня</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">О нас</NavLink></li>
                  </ul>
                </nav>
                :
                ""
              }
            </div>
            <div className="col-xm-12 col-sm-12 col-md-12 col-lg-6">
              <ul className="auth">
                {this.props.is_logged_in ?
                  <li><Search /></li>
                  :
                  ""
                }
                <li> {this.props.is_logged_in ? <a onClick={this.handleLogout}>Выход</a> : <NavLink to="/login" activeClassName="active">Вход</NavLink>}</li>
                <li><NavLink to="/registration" activeClassName="active">Регистрация</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
function mapStateToProps(state) {
  return {
    is_logged_in: state.usersReducer.is_logged_in,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ isLoggedIn: isLoggedIn }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));






