import React from "react";
// import { render } from "react-dom";
import { TaskNumber } from "./TaskNumber";

export class Task6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <TaskNumber number="6" />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
