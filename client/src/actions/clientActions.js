import axios from "axios";
import {
  GET_CLIENTS,
  DELETE_CLIENT,
  ADD_CLIENT,
  CLIENTS_LOADING,
  EDIT_CLIENT,
  SET_CURRENT_EDIT_CLIENT,
} from "./types";

export const getClients = () => (dispatch) => {
  dispatch(setClientsLoading());
  axios.get("/api/clients").then((res) =>
    dispatch({
      type: GET_CLIENTS,
      payload: res.data,
    })
  );
};

export const addClient = (client) => (dispatch) => {
  axios.post("/api/clients", client).then((res) =>
    dispatch({
      type: ADD_CLIENT,
      payload: res.data,
    })
  );
};

export const deleteClient = (id) => (dispatch) => {
  axios.delete(`/api/clients/${id}`).then((res) =>
    dispatch({
      type: DELETE_CLIENT,
      payload: id,
    })
  );
};

export const setClientsLoading = () => {
  return {
    type: CLIENTS_LOADING,
  };
};

export const editClient = (id) => (dispatch) => {
  axios.put(`/api/clients/${id}`).then((res) =>
    dispatch({
      type: EDIT_CLIENT,
      payload: res.data,
    })
  );
};

export const setClientToEdit = (id) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_EDIT_CLIENT,
    payload: id,
  });
};
