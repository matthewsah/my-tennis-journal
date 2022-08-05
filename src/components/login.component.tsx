import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface ILoginProps extends ParameterDecorator {
  currentUser: string | undefined;
  changeUser: any;
}

class ILoginState {
  username: string;
  password: string;
  newUsername: string;
  newPassword: string;
  firstName: string;
  lastName: string;
}

export default class Login extends Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);

    this.onChangeNewUsername = this.onChangeNewUsername.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);

    this.onSubmitNewUser = this.onSubmitNewUser.bind(this);

    this.onSubmitLogOut = this.onSubmitLogOut.bind(this);

    this.state = {
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      firstName: "",
      lastName: "",
    };
  }

  onChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
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
    this.setState({
      newUsername: e.target.value,
    });
  }

  onChangeNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      newPassword: e.target.value,
    });
  }

  onChangeFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      lastName: e.target.value,
    });
  }

  async onSubmitLogin(e: any) {
    e.preventDefault();
    console.log(
      `submitting loginnnn form with username: ${this.state.username} and password: ${this.state.password}`
    );
    const config = {
      params: {
        username: this.state.username,
        password: this.state.password,
      },
    };

    try {
      const res = await axios.get("http://localhost:5000/users/login", config);
      if (res.status === 200) {
        console.log("success");
        await this.props.changeUser(this.state.username);
        window.localStorage.setItem("user", `${this.state.username}`);
        window.location.href = "/";
      } else {
        console.log("failure");
        throw new Error("Could not log in");
      }
    } catch (e) {
      console.error(
        `Error trying to log in: ${e instanceof Error ? e.message : e}`
      );
      window.location.reload();
    }
  }

  async onSubmitNewUser(e: any) {
    e.preventDefault();
    console.log("in new user");
    console.log(
      `submitting new user form with username: ${this.state.newUsername} and password: ${this.state.newPassword}`
    );

    const userInfo = {
      username: this.state.newUsername,
      password: this.state.newPassword,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    try {
      const res = await axios.post("http://localhost:5000/users/", userInfo);
      if (res.status === 200) {
        console.log("success");
      } else {
        console.log("failure");
      }
    } catch (e) {
      console.error(
        `Error trying to add new user: ${e instanceof Error ? e.message : e}`
      );
    }
    window.location.reload();
  }

  onSubmitLogOut(e: any) {
    e.preventDefault();
    console.log("signing out");

    // set the current user to undefined
    this.props.changeUser(undefined);
    window.localStorage.clear();
  }

  render() {
    if (this.props.currentUser === undefined) {
      return (
        <Fragment>
          <div className="mb-4">
            <h3>Log in</h3>
            <form onSubmit={this.onSubmitLogin}>
              <input
                type="text"
                placeholder="Username"
                required
                className="form-control mb-2"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />

              <input
                type="password"
                placeholder="Password"
                required
                className="form-control mb-2"
                value={this.state.password}
                onChange={this.onChangePassword}
              />

              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </form>
          </div>
          <div>
            <h3>Create a new Account</h3>
            <form onSubmit={this.onSubmitNewUser}>
              <input
                type="text"
                placeholder="Username"
                required
                className="form-control mb-2"
                value={this.state.newUsername}
                onChange={this.onChangeNewUsername}
              />

              <input
                type="password"
                placeholder="Password"
                required
                className="form-control mb-2"
                value={this.state.newPassword}
                onChange={this.onChangeNewPassword}
              />

              <input
                type="text"
                placeholder="First Name"
                required
                className="form-control mb-2"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />

              <input
                type="text"
                placeholder="Last Name"
                required
                className="form-control mb-2"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              />

              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </form>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <h4>You are logged in as {this.props.currentUser}, not you?</h4>
          <form onSubmit={this.onSubmitLogOut}>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Log out
              </button>
            </div>
          </form>
        </Fragment>
      );
    }
  }
}
