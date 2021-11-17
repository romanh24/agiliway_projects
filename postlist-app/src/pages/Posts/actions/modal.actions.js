import {
  // POST_ADD_SUCCESS,
  OPEN_MODAL,
  MODAL_ADD_CLOSE,
  MODAL_EDIT_SHOW,
  MODAL_EDIT_CLOSE,
} from "../action-types/modal.action-types";

// export const postAddSuccessAction = () => {
//   return {
//     type: POST_ADD_SUCCESS,
//   };
// };

export const modalShowAction = (modalType) => {
  return {
    type: OPEN_MODAL,
    payload: modalType,
  };
};

export const modalCloseAction = () => {
  return {
    type: MODAL_ADD_CLOSE,
  };
};

export const modalEditShowAction = () => {
  return {
    type: MODAL_EDIT_SHOW,
  };
};

export const modalEditCloseAction = () => {
  return {
    type: MODAL_EDIT_CLOSE,
  };
};
