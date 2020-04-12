import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class Register extends Component {
state = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: ""
}

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }


    handleSubmit = e => {
        e.preventDefault();
        const { firstname, lastname, email, mobile, password } = this.state;
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                first_name: firstname,
                last_name: lastname,
                email,
                phone_no: mobile,
                password
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.token) {
                localStorage.setItem("token", res.token);
                localStorage.setItem("userId", res.userId)

                window.location = "/profile";
                toast.success(res.msg);
            } else if (res.msg) {
                toast.error(res.msg);
            } else {
                res.errors.forEach(err => {
                    toast.error(err.msg);
                });
            }
        })
        .catch(err => console.log(err))
    }

    

    render() {
        const { firstname, lastname, email, mobile, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="registrationForm">
                <h1>Registration</h1>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname</label>
                    <input 
                        autoFocus 
                        value={firstname}
                        onChange={this.handleChange} 
                        name="firstname" 
                        type="text" 
                        className="form-control" 
                        id="firstname" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Lastname</label>
                    <input 
                        value={lastname}
                        onChange={this.handleChange}
                        name="lastname"
                        type="text"
                        className="form-control"
                        id="lastname"                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        value={email}
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"                    
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share ypour email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input 
                        value={mobile}
                        onChange={this.handleChange}
                        name="mobile"
                        type="number"
                        className="form-control"
                        id="mobile"                        
                    />
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
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="mt-4 text-right"> <span className="comment"> Already have an account? </span> {" "}
                <Link className="btn btn-primary" to="/login">
                    Login
                </Link>
                </p>

            </form>
        );
    }
}

export default Register;