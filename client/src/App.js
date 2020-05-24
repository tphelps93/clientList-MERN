import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ClientTable from "./components/ClientTable";
import ClientModal from "./components/ClientModal";
import { Container } from "reactstrap";
import ClientEditModal from "./components/ClientEditModal.js";

import store from "./store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ClientModal />
            <ClientTable />
            <ClientEditModal />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
