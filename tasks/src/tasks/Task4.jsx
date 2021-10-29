import React from "react";
import { TaskNumber } from "./TaskNumber";

export class Task4 extends React.Component {
  render() {
    return (
      <div>
        <TaskNumber number="4" />
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}
