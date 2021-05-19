import React from "react";
import "./signup.css";

const SignUp = () => (
  <form className="form-group" action="/add" method="POST">
    <label for="user-name">User Name:</label>
    <input type="text" id="inputname" name="inputname" />
    <label for="email">Email Name:</label>
    <input type="email" id="email" name="email" />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" />
  </form>
);

export default SignUp;
