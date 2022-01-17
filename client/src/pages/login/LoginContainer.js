import React, { Component } from "react";
import Header from "../../components/Header";
import LoginForm from "./LoginForm";

class LoginContainer extends Component {
    render () {
        return (
            <div className="loginContainer">
                <Header text="Login" />
                <LoginForm />
            </div>
        );
    }
}

export default LoginContainer;