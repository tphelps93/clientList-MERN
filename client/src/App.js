import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ClientTable from "./components/ClientTable";
import ClientModal from "./components/ClientModal";
import { Container } from "reactstrap";
import ClientEditModal from "./components/ClientEditModal.js";
import ClientDetailsModal from "./components/ClientDetailsModal.js";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <ClientModal />
          <ClientTable />
          <ClientEditModal />
          <ClientDetailsModal />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  client: state.client,
  modal: state.modal,
});

export default connect(mapStateToProps)(App);
