import React from "react";
import { connect } from "react-redux";
import "./CarList.scss";
import { NoItems } from "./NoItems";
import { Button } from "./Button";
import {
  addCarAction,
  removeCarAction,
  newCarSubmitAction,
} from "../../redux/actions";

class CarList extends React.Component {
  state = {
    fields: {
      someText: {
        name: "someText",
        label: "Add your own car: ",
        value: "",
        error: "",
        validator: (value = "") => {
          let error = "";

          if (!value.length) {
            return (error = "Cannot be empty");
          }

          if (!value.match(/^[a-zA-Z]+$/)) {
            return (error = "Only letters");
          }

          return error;
        },
      },
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state.fields.someText;
    const { newCarSubmit } = this.props;

    newCarSubmit(value);

    this.setState({
      fields: {
        someText: {
          ...this.state.fields.someText,
          value: "",
          error: "",
        },
      },
    });
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.state.fields[name];
    const error = currentField.validator(value);
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value, error },
      },
    });
  };

  render() {
    console.log(this.props);
    const { cars, addCar, removeCar } = this.props;
    const {
      fields: { someText },
    } = this.state;
    return (
      <div className="wrapper">
        <h1>Add your future car to the list:</h1>
        <ul>
          {cars.length > 0 &&
            cars.map((car, index) => <li key={index}>{car}</li>)}
          {cars.length === 0 && <NoItems />}
        </ul>

        <div className="error">
          <span>{someText.error.length > 0 && someText.error}</span>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor={someText.name}>{someText.label}</label>

          <input
            type="text"
            onChange={this.handleInputChange}
            value={someText.value}
            name={someText.name}
            id={someText.name}
            placeholder="Enter a text"
            autoComplete="off"
          />

          <Button
            disabled={cars.length === 10 || someText.error}
            text="Add your own car"
          />
        </form>

        <Button disabled={cars.length >= 10} onClick={addCar} text="Add" />
        <Button
          disabled={cars.length === 0}
          onClick={removeCar}
          text="Remove"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps: ", state);
  const { carReducer } = state;
  return {
    cars: carReducer.cars,
  };
}

const mapDispatchToProps = {
  addCar: addCarAction,
  removeCar: removeCarAction,
  newCarSubmit: newCarSubmitAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
