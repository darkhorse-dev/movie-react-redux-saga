import React, { Component } from 'react'

import "./SearchPage.scss";

import SearchMoviesContainer from "../../containers/SearchMoviesContainer/SearchMoviesContainer";
import Slider from '../Slider/Slider';

class SearchPage extends Component {
    render() {
        return (
            <div className="search-page">
                <Slider></Slider>
                <div className="container">
                    <SearchMoviesContainer/>
                  </div>
            </div>
        )
    }
}
export default SearchPage;