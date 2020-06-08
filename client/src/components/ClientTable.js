import React, { Component } from "react";
import { Table, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { getClients, addClient, deleteClient } from "../actions/clientActions";
import { openDetailsModal, openEditModal } from "../actions/modalActions";
import PropTypes from "prop-types";

class ClientTable extends Component {
  componentDidMount() {
    this.props.getClients();
  }

  onDeleteClick = (id) => {
    this.props.deleteClient(id);
  };

  openEditModal = (id) => {
    this.props.openEditModal(id);
  };

  renderClient = (clients, _id) => {
    return (
      <tr key={_id} timeout={500} classNames="fade">
        <td>
          <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={() => this.onDeleteClick(clients._id)}
          >
            &times;
          </Button>

          <Button
            style={{ marginLeft: ".2rem" }}
            className="add-btn"
            outline
            color="warning"
            size="sm"
            onClick={() => this.openEditModal(clients._id)}
          >
            Edit
          </Button>

          <Button
            style={{ marginLeft: ".3rem" }}
            className="detail-btn"
            outline
            color="info"
            size="sm"
            onClick={() => this.props.openDetailsModal(clients._id)}
          >
            Details
          </Button>
        </td>
        <td>{clients.name}</td>
        <td>{clients.email}</td>
        <td>{clients.number}</td>
      </tr>
    );
  };

  render() {
    const { clients } = this.props.client;
    return (
      <Container id="listContainer">
        <Table
          id="listTable"
          className="table-striped table-bordered table-hover"
          dark
        >
          <tr class="listRow">
            <thead id="tableHeader">
              <tr>
                <th id="listActions">Actions</th>
                <th id="listName">Name</th>
                <th id="listEmail">Email</th>
                <th id="listNumber">Number</th>
              </tr>
            </thead>
            <tbody class="listRow">{clients.map(this.renderClient)}</tbody>
          </tr>
        </Table>
      </Container>
    );
  }
}

ClientTable.propTypes = {
  getClients: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps, {
  getClients,
  deleteClient,
  addClient,
  openDetailsModal,
  openEditModal,
})(ClientTable);
