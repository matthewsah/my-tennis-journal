import React, { Component } from "react";
import JournalLog from "./journal-log.component.tsx";
import { Link } from "react-router-dom";
import axios from "axios";

interface ILogProps extends ParameterDecorator {
  currentUser: string | undefined;
}

class ILogState {
  incompleteLogs: any;
  completedLogs: any;
}

export default class Logs extends Component<ILogProps, ILogState> {
  constructor(props: ILogProps) {
    super(props);

    this.state = {
      incompleteLogs: [],
      completedLogs: [],
    };
  }

  async componentDidMount() {
    try {
      let config = {
        params: {
          username: this.props.currentUser,
          logComplete: false,
        },
      };

      let res = await axios.get(`http://localhost:5000/journallogs/`, config);
      // TODO: Sort the logs in chronological order
      this.setState({
        incompleteLogs: res.data,
      });

      config = {
        params: {
          username: this.props.currentUser,
          logComplete: true,
        },
      };

      res = await axios.get(`http://localhost:5000/journallogs/`, config);
      // TODO: Sort the logs in chronological order
      this.setState({
        completedLogs: res.data,
      });
    } catch (e) {
      console.error(`Error: ${e instanceof Error ? e.message : e}`);
    }
  }

  renderIncompleteLogs() {
    return this.state.incompleteLogs.map((currentLog) => {
      return (
        <JournalLog
          _id={currentLog._id}
          date={currentLog.date}
          focusItems={currentLog.focusItems}
          reflection={currentLog.reflection}
          complete={currentLog.logComplete}
        />
      );
    });
  }

  renderCompletedLogs() {
    return this.state.completedLogs.map((currentLog) => {
      return (
        <JournalLog
          _id={currentLog._id}
          date={currentLog.date}
          focusItems={currentLog.focusItems}
          reflection={currentLog.reflection}
          complete={currentLog.logComplete}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.incompleteLogs.length > 0 && <h2>Incomplete logs</h2>}
          {this.renderIncompleteLogs()}
        </div>
        <div>
          {this.state.completedLogs.length > 0 && <h2>Completed logs</h2>}
          {this.renderCompletedLogs()}
        </div>
      </div>
    );
  }
}
