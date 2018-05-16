import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="list">
                      <h4>На устройствах</h4>
                      <ul>
                        <li><a href="">Мобильные устройства</a></li>
                        <li><a href="">Телевизор</a></li>
                        <li><a href="">Медиаплееры</a></li>
                        <li><a href="">На компьютер</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="list">
                      <h4>На устройствах</h4>
                      <ul>
                        <li><a href="">Мобильные устройства</a></li>
                        <li><a href="">Телевизор</a></li>
                        <li><a href="">Медиаплееры</a></li>
                        <li><a href="">На компьютер</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <nav>
              <span className="logo"></span>
              <ul className="footer-menu">
                <li><NavLink to="/">Главаня</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

