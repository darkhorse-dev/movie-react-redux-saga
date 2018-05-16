import React, { Component } from 'react'
import ReactSlider from 'react-slick'

import "./Slider.scss";

export default class Slider extends Component {
    render() {
        const slides = [
            {
                url: "http://s1.vcdn.biz/static/f/1185887151/image.jpg/pt/r1600x520",
            },
            {
                url: "http://s7.vcdn.biz/static/f/1165744971/image.jpg/pt/r1600x520",
            },
        ]
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <ReactSlider className="slider" {...settings}>
                {
                    slides.map((image, index) => {
                        return <div className="slide" key={index} style={{ backgroundImage: `url(${image.url})` }}></div>
                    })
                }
            </ReactSlider>
        )
    }
}
