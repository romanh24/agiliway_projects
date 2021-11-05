import { ADD_CAR, REMOVE_CAR, NEW_CAR_SUBMIT } from "./types";

export function addCarAction() {
  return {
    type: ADD_CAR,
  };
}
export function removeCarAction() {
  return {
    type: REMOVE_CAR,
  };
}

export function newCarSubmitAction(value) {
  return {
    type: NEW_CAR_SUBMIT,
    payload: value,
  };
}
