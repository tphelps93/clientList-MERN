import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  client: clientReducer,
  modal: modalReducer,
});
