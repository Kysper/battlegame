import React, { Component } from "react";
import axios from "axios";
import "../form/form.css";
export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handlerInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    const user = {
      username: "Asdqwe",
      email: "Qwerty@qwerty",
      password: "password12345",
    };
    event.preventDefault();
    await axios
      .post("http://localhost:3001/api/register", { user })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handlerInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handlerInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.handlerInputChange}
          />
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    );
  }
}

export default Form;
