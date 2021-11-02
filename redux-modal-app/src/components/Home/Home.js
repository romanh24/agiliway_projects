import React, { Component } from "react";
import "./Home.scss";
import ModalClassBased from "../ModalClassBased";
import ReduxModalClass from "../ReduxModal";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="morpheus"></div>
        <div className="pills">
          <ReduxModalClass />
          <ModalClassBased />
        </div>
      </div>
    );
  }
}

export default Home;
