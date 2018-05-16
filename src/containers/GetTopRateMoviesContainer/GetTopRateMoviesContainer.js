import React, { Component } from 'react';
import "./GetTopRateMoviesContainer.scss"

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getTopRateMovies } from "../../actions/actions";

import TextTruncate from 'react-text-truncate'; 

class GetTopRateMoviesContainer extends Component {

    componentDidMount() {
        this.props.getTopRateMovies();
    }

    render(){
        return (
                <section className="top-rate-movies">
                <div className="container">
                        <div className="row">
                            <div className="col-sm-12"><h2>Топ  фильмы</h2></div>
                        </div>
                        <div className="row">
                            {
                                Object.keys(this.props.movies_top_rate).length > 0 && this.props.movies_top_rate.results.map((elemetn, index) => {
                                    return (
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={elemetn.id}>
                                            <div className="movie">
                                                <img src={"http://image.tmdb.org/t/p/w342/" + elemetn.poster_path} alt="" />
                                                <div className="title"><a href="#1" className="read-more">{elemetn.title}</a></div>
                                                <div className="description">
                                                    <TextTruncate
                                                        line={6}
                                                        truncateText="…"
                                                        text={elemetn.overview}
                                                        textTruncateChild={<a href="#1" className="read-more">Читать далле</a>}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            );
        }
    }


function mapStateToProps(state) {
    return {
        movies_top_rate: state.moviesAppReducer.movies_top_rate
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getTopRateMovies: getTopRateMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTopRateMoviesContainer);
