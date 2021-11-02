import { MODAL_OPEN, MODAL_CLOSE } from "./types";

export function onOpenModal(isOpen) {
  return {
    type: MODAL_OPEN,
    payload: isOpen,
  };
}
export function onCloseModal(isOpen) {
  return {
    type: MODAL_CLOSE,
    payload: isOpen,
  };
}
