import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class Login extends Component {
    state = {
        email: "",
        password: ""
    };


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
    
            if(data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.userId)
                
                window.location = "/profile";
                toast.success(data.msg);
            } else if (data.msg) {
                toast.error(data.msg)
            }
        })
        .catch(err => console.log(err));

    };


    render() {
        const { email, password } = this.state;
        return (
            <form onSubmit={ this.handleSubmit } className="loginForm">
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="email" >Email Address</label>
                    <input 
                        autoFocus
                        value={email}
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        required                    
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        Enter a valid email address
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        value={password}
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary"> Login</button>
                <p className="mt-4 text-right"><span className="comment">Don't have an account?</span> {" "}
                    <Link className="btn btn-primary" to="/register">
                        Sign Up                    
                    </Link> 
                </p>
            </form>
        );
    }
}

export default Login
