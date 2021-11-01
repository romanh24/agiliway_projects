import { MODAL_OPEN, MODAL_CLOSE } from "./types";

export function onOpenModal() {
  return {
    type: MODAL_OPEN,
  };
}
export function onCloseModal() {
  return {
    type: MODAL_CLOSE,
  };
}
