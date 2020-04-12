import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import CreateOrder from "./components/createOrder";
import Logout from "./components/logout";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Profile from "./components/profile";
import NotFound from "./components/not-found";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./App.css";


class App extends Component {
  state = {};

  componentDidMount(){
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    }
    catch (ex) {}
  }

  render() {
    const { user } = this.state;

    return (
      <BrowserRouter>
      <React.Fragment>
        <ToastContainer />

        <Header user={this.state.user} />

        <div className="">
          <Switch>

            <Route 
                path="/register" 
                render={props => {
                if(!user) return <Register {...props} />;
                return <Redirect to="/profile" />;
                }} 
              />

            <Route path="/login" 
                render={props => {
                if(!user) return <Login {...props} />;
                return <Redirect to="/profile" />;
              }} />

            <Route path="/logout" component={Logout} />

            <Route path="/profile" component={Profile} />

            <Route path="/createOrder" 
              render={props => {
                if(!user) return <Redirect to="/" />
                return <CreateOrder {...props} />
              }} />

            <Route path="/notFound" component={NotFound} />

            <Route path="/" 
                render={props => {
                if(!user) return <Home {...props} />
                return <Redirect to="/profile" />
              }} />

            <Redirect to="/notfound" />

          </Switch>
        </div>

        <Footer />

      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
