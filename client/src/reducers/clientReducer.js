import {
  GET_CLIENTS,
  DELETE_CLIENT,
  ADD_CLIENT,
  CLIENTS_LOADING,
  EDIT_CLIENT,
  VIEW_CLIENT,
  SET_CURRENT_EDIT_CLIENT,
} from "../actions/types";

const initialState = {
  clients: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };
    case DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(
          (client) => client._id !== action.payload
        ),
      };
    case ADD_CLIENT:
      return {
        ...state,
        clients: [action.payload, ...state.clients],
      };
    case CLIENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EDIT_CLIENT:
      return {
        ...state,
        clients: [action.payload, ...state.clients],
      };
    case VIEW_CLIENT:
      return {
        ...state,
      };
    case SET_CURRENT_EDIT_CLIENT:
      return {
        ...state,
        clientToEdit: state.clients.filter(
          (client) => client._id === action.payload
        )[0],
      };
    default:
      return state;
  }
}
