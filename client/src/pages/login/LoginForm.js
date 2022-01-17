import React, { Component } from "react";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.email && this.state.password) {
            this.setState({
                email: "",
                password: "",
            });
        } else {
            alert("No email and/or password were entered");
        }
    }

    render() {
        return (
            <form 
                id="loginForm"
                onSubmit={this.handleSubmit}
                className="loginFormContainer"
            >
                <input 
                    type="text"
                    placeholder="email"
                    name="email"
                    className="inputField"
                    value={this.state.email}
                    onChange={this.onChange}
                />
                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    className="inputField"
                    value={this.state.password}
                    onChange={this.onChange}
                />
                <button className="loginButton">login</button>
            </form>
        );
    }
};

export default LoginForm;