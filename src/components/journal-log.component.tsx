import React, { Component } from "react";
import EditPracticeLog from "./edit-practice-log.component.tsx";
import "../styles/log-styles.css";
import axios from "axios";

interface IJournalLogProps extends ParameterDecorator {
  date: Date;
  focusItems: object;
  reflection: string;
  _id: string;
  complete: boolean;
}

class IJournalLogState {
  inEditMode: boolean;
}

export default class JournalLog extends Component<
  IJournalLogProps,
  IJournalLogState
> {
  constructor(props: IJournalLogProps) {
    super(props);

    this.state = {
      inEditMode: false,
    };
  }

  private async deleteLog(id: string) {
    await axios.delete(`http://localhost:5000/journallogs/${id}`);
    window.location.reload();
  }

  render() {
    return (
      <div className="log-card d-flex w-100 p-4 mb-4">
        <div className="d-flex w-100 align-items-center mb-2">
          <h3 className="log-card-date w-100 m-0">
            {this.props.date.toString().slice(0, 10)}
          </h3>
          <div className="d-flex align-items-center">
            <a
              href="#"
              onClick={() => {
                this.setState({
                  inEditMode: !this.state.inEditMode,
                });
              }}
            >
              edit
            </a>
            <span>|</span>
            <a href="#" onClick={() => this.deleteLog(this.props._id)}>
              delete
            </a>
          </div>
        </div>

        {Object.keys(this.props.focusItems).length !== 0 ? (
          <div className="d-flex w-100">
            <div className="col-lg-3 col-md-4 col-sm-5">
              <h4>Focus Items / Performance</h4>
              {Object.keys(this.props.focusItems).map((key, _) => {
                return (
                  <div className="d-flex justify-content-between">
                    <p className="d-flex m-0">{key}</p>
                    <p className="d-flex m-0">{this.props.focusItems[key]}</p>
                  </div>
                );
              })}
            </div>
            <div className="col-1"></div>
            <div className="col-lg-8 col-md-7 col-sm-6">
              <h4>Reflection</h4>
              <p>{this.props.reflection}</p>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column w-100">
            <h4>Reflection</h4>
            <p>{this.props.reflection}</p>
          </div>
        )}

        {!this.state.inEditMode ? undefined : (
          <div className="w-100">
            <EditPracticeLog
              _id={this.props._id}
              date={this.props.date}
              focusItems={this.props.focusItems}
              focusItemsKeys={[...Object.keys(this.props.focusItems)]}
              reflection={this.props.reflection}
              username="matthew"
            />
          </div>
        )}
      </div>
    );
  }
}
