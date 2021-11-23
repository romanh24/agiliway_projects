import { MODAL_OPEN, MODAL_CLOSE } from '../action-types/modal.action-types';

export const modalOpenAction = (modalType, post) => ({
  type: MODAL_OPEN,
  payload: { modalType, post },
});

export const modalCloseAction = () => ({
  type: MODAL_CLOSE,
});
