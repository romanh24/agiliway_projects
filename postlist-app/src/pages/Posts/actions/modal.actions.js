import {
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_LOADING_CANCEL,
} from "../action-types/modal.action-types";

export const modalOpenAction = (modalType) => {
  return {
    type: MODAL_OPEN,
    payload: modalType,
  };
};

export const modalCloseAction = () => {
  return {
    type: MODAL_CLOSE,
  };
};

export const modalLoadingCancelAction = () => {
  return {
    type: MODAL_LOADING_CANCEL,
  };
};
