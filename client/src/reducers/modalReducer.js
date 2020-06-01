import {
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  OPEN_DETAILS_MODAL,
  CLOSE_DETAILS_MODAL,
} from "../actions/types";

const initialState = {
  isEditModalOpen: false,
  isDetailsModalOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        isEditModalOpen: true,
      };
    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        isEditModalOpen: false,
      };
    case OPEN_DETAILS_MODAL:
      return {
        ...state,
        isDetailsModalOpen: true,
      };
    case CLOSE_DETAILS_MODAL:
      return {
        ...state,
        isDetailsModalOpen: false,
      };
    default:
      return state;
  }
}
