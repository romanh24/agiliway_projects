import { ADD_CAR, REMOVE_CAR, NEW_CAR_SUBMIT } from "./types";

const CAR = {
  name: "Tesla",
};

const initialState = {
  cars: ["Audi", "BMW", "Chevrolet", "Ford", "Honda"],
};

export const carReducer = (state = initialState, action) => {
  console.log("modalReducer:", action);
  switch (action.type) {
    case ADD_CAR: {
      const { cars } = state;
      const updatedList = [...cars, CAR.name];
      return {
        ...state,
        cars: updatedList,
      };
    }
    case REMOVE_CAR: {
      const { cars } = state;
      const updatedList = [...cars];
      updatedList.pop();
      return {
        ...state,
        cars: updatedList,
      };
    }
    case NEW_CAR_SUBMIT: {
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    }
    default:
      return state;
  }
};
