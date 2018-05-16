import React, { Component } from 'react'

import "./HomPage.scss"

import GetPopularMoviesContainer from "../../containers/GetPopularMoviesContainer/GetPopularMoviesContainer";
import GetTopRateMoviesContainer from "../../containers/GetTopRateMoviesContainer/GetTopRateMoviesContainer";
import Slider from '../Slider/Slider'


class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Slider></Slider>
        <GetPopularMoviesContainer />
        <GetTopRateMoviesContainer />
      </div>
    )
  }
}

export default HomePage;
