import React, { Component } from 'react';
import "./Search.scss";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchMovies } from "../../actions/actions";
import { withRouter } from 'react-router'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: "" };
    }

    onFocus=(event)=>{
        let target=event.target;
        let icon=target.parentNode;
        icon.classList.add("focus");
    }
    onBlur=(event)=>{
        let target=event.target;
        let icon=target.parentNode;
        icon.classList.remove("focus");
        target.value=""
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.searchMovies(this.state.searchValue);
        this.props.history.push("/search");
    }

    handleChange = (event)=>{
        let searchValue=event.target.value.toLowerCase().trim();
        this.setState({ searchValue: searchValue });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="search-field" onFocus={this.onFocus} onBlur={this.onBlur}>
                    <i className="material-icons">search</i>
                    <input type="search" name="search" placeholder="Поиск..." onChange={this.handleChange}/>
                </div>
            </form>
        );
    }
}


function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchMovies: searchMovies }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

