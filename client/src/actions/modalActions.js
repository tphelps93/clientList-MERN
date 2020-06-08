import {
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  OPEN_DETAILS_MODAL,
  CLOSE_DETAILS_MODAL,
} from "./types";

export const openEditModal = (id) => {
  return {
    type: OPEN_EDIT_MODAL,
    modal: true,
  };
};

export const closeEditModal = () => {
  return {
    type: CLOSE_EDIT_MODAL,
    modal: false,
  };
};

export const openDetailsModal = () => {
  return {
    type: OPEN_DETAILS_MODAL,
    modal: true,
  };
};

export const closeDetailsModal = () => {
  return {
    type: CLOSE_DETAILS_MODAL,
    modal: false,
  };
};
