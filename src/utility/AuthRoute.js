import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const AuthRoute = ({ component: Component, is_logged_in, ...rest }) => (
  <Route
    {...rest}
    render={props => (is_logged_in === true ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)}
  />
  
);

function mapStateToProps(state) {
  return {
    is_logged_in: state.usersReducer.is_logged_in,
  };
}

export default withRouter(connect(mapStateToProps, null)(AuthRoute));