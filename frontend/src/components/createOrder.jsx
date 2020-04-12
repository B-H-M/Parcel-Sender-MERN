import React, { Component } from "react";
import { toast } from "react-toastify";
//import jwtDecode from 'jwt-decode';

class CreateOrder extends Component {
  state = {
    account: {
      pickup: "",
      destination: "",
      recipName: "",
      recipNum: "",
    },
  };

  handleChange = (e) => {
    const account = this.state.account;
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const jwt = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    //const user = jwtDecode(jwt);
    //const userId = user.id;

    const { pickup, destination, recipName, recipNum } = this.state.account;

    fetch(`${process.env.REACT_APP_API_URL}/api/v1/parcels`, {
      method: "POST",
      headers: {
        Authorization: jwt,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        pickup_location: pickup,
        destination,
        recipient_name: recipName,
        recipient_phone_no: recipNum,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          toast.success(data.msg);
          console.log("the data:", data.msg);
          window.location = "/profile";
        } else {
          data.errors.forEach((err) => toast.error(err.msg));
          console.log("unable to post data");
        }
      });
  };

  render() {
    const { pickup, destination, recipName, recipNum } = this.state.account;
    return (
      <form onSubmit={this.handleSubmit} className="createOrderForm">
        <h1>Create Order</h1>
        <div className="form-group">
          <label htmlFor="pickup">Pickup Location</label>
          <input
            value={pickup}
            onChange={this.handleChange}
            name="pickup"
            type="text"
            className="form-control"
            id="pickup"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            value={destination}
            onChange={this.handleChange}
            name="destination"
            type="text"
            className="form-control"
            id="destination"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipName">Recipient Name</label>
          <input
            value={recipName}
            onChange={this.handleChange}
            name="recipName"
            type="text"
            className="form-control"
            id="recipName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipNum">Recipient Number</label>
          <input
            value={recipNum}
            onChange={this.handleChange}
            name="recipNum"
            type="number"
            className="form-control"
            id="recipNum"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Create
        </button>
      </form>
    );
  }
}

export default CreateOrder;
