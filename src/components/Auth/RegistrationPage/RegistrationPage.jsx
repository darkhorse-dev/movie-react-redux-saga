import React, { Component } from 'react';
import "./RegistrationPage.scss"

import { database } from '../../../firebase/firebase'
import { withRouter } from 'react-router';


class Registration extends Component {

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

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value }, () => { this.formValidation(name, value) });
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
        submitForm = (emailValid && passwordValid);

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
        const usersRef = database.ref('users');

        const users = {
            email: this.state.email,
            password: this.state.password
        }
        usersRef.push(users);
        this.setState({
            email: '',
            password: ''
        });
        event.target.reset();
        this.props.history.push("/login");

    }

    render() {
        return (
            <div className="login">
                <h4>Регистрация</h4>
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
                        <button className="btn btn btn-primary w-100" disabled={!this.state.submitForm} type="submit">Зарегистрироваться</button>
                    </div>
                    <div className="invalid-feedback" style={{ display: "block" }}>{this.state.messageAuth}</div>
                </form>
            </div>
        );
    }
}


export default withRouter(Registration);

