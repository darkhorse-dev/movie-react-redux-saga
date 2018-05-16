import React, { Component } from 'react';
import "./LoginPage.scss"

import { getUsers, isLoggedIn } from "../../../actions/actions";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitForm: false,
            email: "",
            password: "",
            messageAuth: "",
            message: {
                email: "",
                password: ""
            },
            className: {
                email: "",
                password: "",
            },
            emailValid: false,
            passwordValid: false,
        };
    }

    componentDidMount() {
        this.props.getUsers();
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value },() => { this.formValidation(name, value) });
    }

    formValidation = (name, value) => {
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let message = this.state.message;
        let className = this.state.className;
        let submitForm = false;

        switch (name) {
            case "email":
                let emailRegExp = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                emailValid = emailRegExp.test(value);
                className.email = emailValid ? "is-valid" : "is-invalid";
                message.email = emailValid ? "" : "не валидно";
                break;
            case "password":
                passwordValid = value.length >= 5;
                className.password = passwordValid ? "is-valid" : "is-invalid";
                message.password = passwordValid ? "" : `Минимальная длина 5 . Ввели ${value.length} `;
                break;
            default:
                break;

                
        }
        submitForm = (emailValid  && passwordValid );

        this.setState({
            email: name,
            password: value,
            message: message,
            emailValid: emailValid,
            passwordValid: passwordValid,
            className: className,
            submitForm: submitForm
        });

    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.get_users.length > 0 && this.props.get_users.filter(user => user.email === this.state.email && user.password === this.state.password).length > 0) {
            let users = this.props.get_users.length > 0 && this.props.get_users.filter(user => user.email === this.state.email && user.password === this.state.password);
            this.setState({ messageAuth: "Авторизировались" });
            localStorage.setItem('userAuth', users[0].id);
            this.props.isLoggedIn(true);
            event.target.reset();
            this.props.history.push("/");
        }
        else {
            this.setState({ messageAuth: "Неправильный логин и/или пароль" });
        }

    }


    render() {
        return (
            <div className="login">
                <h4>Вход</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className={`form-control ${this.state.className.email}`} type="email" name="email" placeholder="E-mail" onChange={this.handleChange} />
                        <div className="invalid-feedback">{this.state.message.email}</div>
                    </div>
                    <div className="form-group">
                        <input className={`form-control ${this.state.className.password}`} type="password" name="password" placeholder="Пароль" onChange={this.handleChange} />
                        <div className="invalid-feedback">{this.state.message.password}</div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn btn-primary w-100" disabled={!this.state.submitForm} type="submit">Войти</button>
                    </div>
                    <div className="invalid-feedback" style={{ display: "block" }}>{this.state.messageAuth}</div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        get_users: state.usersReducer.get_users,
        is_logged_in: state.usersReducer.is_logged_in,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUsers: getUsers, isLoggedIn: isLoggedIn }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

