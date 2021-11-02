import { MODAL_OPEN, MODAL_CLOSE } from "./types";

const initialState = {
  openModal: false,
};

export const modalReducer = (state = initialState, action) => {
  console.log("modalReducer:", action);
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        openModal: action.payload,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        openModal: action.payload,
      };
    default:
      return state;
  }
};
