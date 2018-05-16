import React, { Component } from 'react'

import "./AboutPage.scss";
import Slider from '../Slider/Slider'

class AboutPage extends Component {


  render() {

    return (
      <div className="about-page">
        <Slider></Slider>
        <div className="container">
          AboutPage
      </div>
      </div>
    )
  }
}
export default  AboutPage;