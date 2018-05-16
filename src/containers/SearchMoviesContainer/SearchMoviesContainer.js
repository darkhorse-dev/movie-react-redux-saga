import React, { Component } from 'react';
import "./SearchMoviesContainer.scss"

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { searchMovies } from "../../actions/actions";

import TextTruncate from 'react-text-truncate'; 

class SearchMoviesContainer extends Component {
 
    render(){
        return (
            <section className="search_movies">
                <div className="container">
                        <div className="row">
                            <div className="col-sm-12"><h2>Поиск</h2></div>
                        </div>
                        <div className="row">

                            {
                              Object.keys(this.props.search_movies).length >0 && this.props.search_movies.results.map((elemetn, index) => {
                                    return (
                                        <div className="col-sm-3" key={elemetn.id}>
                                            <div className="movie">
                                                <img src={"http://image.tmdb.org/t/p/w342/"+elemetn.poster_path} alt="" />
                                                <div className="title"><a href="#1">{elemetn.title}</a></div>
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
        search_movies: state.searchMovieReducer.search_movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchMovies: searchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMoviesContainer);
