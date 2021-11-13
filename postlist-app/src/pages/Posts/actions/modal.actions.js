import {
  MODAL_SHOW,
  MODAL_CLOSE,
  MODAL_IN_PROGRESS,
} from "../action-types/modal.action-types";

export const modalShowAction = () => {
  return {
    type: MODAL_SHOW,
  };
};

export const modalCloseAction = () => {
  return {
    type: MODAL_CLOSE,
  };
};

export const modalInProgressAction = () => {
  return {
    type: MODAL_IN_PROGRESS,
  };
};
