import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top headerbg " >
            <Link to="/" className="navbar-brand ml-5">
                <img 
                    src="images/sendITLogo.png" 
                    className="img-fluid headerlogo" 
                    width="100" height="100" 
                    alt="Header Logo" />
            </Link>
            <button
                className="navbar-toggler navbar-dark"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div className="navbar-nav">
                    {!props.user && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link text-dark regLog" to="/register"> Register </NavLink>
                            <NavLink className="nav-item nav-link text-dark regLog" to="/login"> Login </NavLink>
                        </React.Fragment>
                    )}
                    {props.user && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/profile">
                                {props.user.first_name.toUpperCase()}
                            </NavLink>
                            <NavLink className="nav-item nav-link btn btn-secondary mr-1 ml-1 text-white" to="/createOrder">
                                createOrder
                            </NavLink>
                            <NavLink className="nav-item nav-link btn btn-danger" to="/logout">
                                Logout
                            </NavLink>
                        </React.Fragment>
                    )}
                </div>
            </div>
            
        </nav>
    );
};

export default Header;
