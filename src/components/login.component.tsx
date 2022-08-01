import e from "express";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component<
  {},
  {
    username: string;
    password: string;
    newUsername: string;
    newPassword: string;
  }
> {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);

    this.onChangeNewUsername = this.onChangeNewUsername.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onSubmitNewUser = this.onSubmitNewUser.bind(this);

    this.state = {
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
    };
  }

  onChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(typeof e);
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeNewUsername(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(typeof e);
    this.setState({
      newUsername: e.target.value,
    });
  }

  onChangeNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      newPassword: e.target.value,
    });
  }

  onSubmitLogin(e: any) {
    e.preventDefault();
    console.log(
      `submitting loginnnn form with username: ${this.state.username} and password: ${this.state.password}`
    );
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
    };
  }

  onSubmitNewUser(e: any) {
    e.preventDefault();
    console.log("in new user");
    console.log(
      `submitting new user form with username: ${this.state.newUsername} and password: ${this.state.newPassword}`
    );

    const userInfo = {
      username: this.state.newUsername,
      password: this.state.newPassword,
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <h3>Log in</h3>
          <form onSubmit={this.onSubmitLogin}>
            <input
              type="text"
              placeholder="Username"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />

            <div className="form-group">
              <input type="submit" value="Log in" className="btn btn-primary" />
            </div>
          </form>
        </div>
        <div>
          <h3>Create a new Account</h3>
          <form onSubmit={this.onSubmitNewUser}>
            <input
              type="text"
              placeholder="Username"
              required
              className="form-control"
              value={this.state.newUsername}
              onChange={this.onChangeNewUsername}
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="form-control"
              value={this.state.newPassword}
              onChange={this.onChangeNewPassword}
            />
            <div>
              <input
                type="submit"
                value="Create Account"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
