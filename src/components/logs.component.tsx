import React, { Component } from "react";
import JournalLog from "./journal-log.component.tsx";
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
        <JournalLog
          _id="123456789abc"
          date={new Date()}
          focusItems={{
            "keep head up": undefined,
            "look for and recognize short balls": undefined,
          }}
          reflection=""
        />
        <JournalLog
          _id="123456789abc"
          date={new Date()}
          focusItems={{
            "keep head up": 6,
            "look for and recognize short balls": 8,
          }}
          reflection="today I had a really good practice. I was recognizing short balls well and looked for opportunities to come in. I think that If i keep playing like this it will be really good"
        />
        <JournalLog
          _id="123456789abc"
          date={new Date()}
          focusItems={{}}
          reflection="today I had a really good practice. I was recognizing short balls well and looked for opportunities to come in. I think that If i keep playing like this it will be really good"
        />
      </div>
    );
  }
}
