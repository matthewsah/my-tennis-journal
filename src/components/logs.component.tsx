import React, { Component } from "react";
import { Link } from "react-router-dom";

interface ILoginProps extends ParameterDecorator {
  currentUser: string | undefined;
}

export default class Logs extends Component<ILoginProps, {}> {
  constructor(props: ILoginProps) {
    super(props);
  }

  render() {
    return (
      <div>
        currentUser is {this.props.currentUser}
        <p>You are on the Logs component!</p>
      </div>
    );
  }
}
