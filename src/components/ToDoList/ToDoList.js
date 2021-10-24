import React from "react";
import "./ToDoList.scss";
import { NoItems } from "./NoItems";
import { Button } from "./Button";

const CAR = {
  name: "Tesla",
};

class ToDoList extends React.Component {
  state = {
    cars: ["Audi", "BMW", "Chevrolet", "Ford", "Honda"],
    fields: {
      todoText: {
        name: "todoText",
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

  handleIncrease = () => {
    const { cars } = this.state;
    const updatedList = [...cars, CAR.name];
    this.setState({ cars: updatedList });
  };

  handleDecrease = () => {
    const { cars } = this.state;
    cars.pop();
    this.setState({
      cars: cars,
    });
    // const updatedList = [...cars];
    // updatedList.pop();
    // this.setState({ cars: updatedList });
  };

  handleSubmit = (event) => {
    const { value } = this.state.fields.todoText;
    this.setState({
      cars: [...this.state.cars, value],
      fields: {
        todoText: {
          ...this.state.fields.todoText,
          value: "",
          error: "",
        },
      },
    });
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.state.fields[name];
    const error = currentField.validator(value);
    console.log("error:", error);
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value, error },
      },
    });
  };

  render() {
    const {
      cars,
      fields: { todoText },
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
          <span>{todoText.error.length > 0 && todoText.error}</span>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor={todoText.name}>{todoText.label}</label>

          <input
            type="text"
            onChange={this.handleInputChange}
            value={todoText.value}
            name={todoText.name}
            id={todoText.name}
            placeholder="Enter a text"
            autoComplete="off"
          />

          <Button
            disabled={cars.length === 10 || todoText.error}
            text="Add your own car"
          />
        </form>

        <Button
          disabled={cars.length >= 10}
          onClick={this.handleIncrease}
          text="Add"
        />
        <Button
          disabled={cars.length === 0}
          onClick={this.handleDecrease}
          text="Remove"
        />
      </div>
    );
  }
}
export default ToDoList;
