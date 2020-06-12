import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { connect } from "react-redux";
import { openDetailsModal } from "../actions/modalActions";
import { closeDetailsModal } from "../actions/modalActions";
import PropTypes from "prop-types";

class ClientDetailsModal extends Component {
  toggle = () => {
    if (this.props.modal.isDetailsModalOpen) this.props.closeDetailsModal();
    else this.props.openDetailsModal();
  };

  displayClientDetails = (clients, _id) => {
    return (
      <ListGroup key={_id} timeout={500} classNames="fade">
        <ListGroupItem>
          <p style={{ float: "left", marginRight: "5px" }}>
            <b>Name: </b>
          </p>
          {clients.name}
        </ListGroupItem>

        <ListGroupItem>
          <p style={{ float: "left", marginRight: "5px" }}>
            <b>Email: </b>
          </p>
          {clients.email}
        </ListGroupItem>

        <ListGroupItem>
          <p style={{ float: "left", marginRight: "5px" }}>
            <b>Number: </b>
          </p>
          {clients.number}
        </ListGroupItem>
      </ListGroup>
    );
  };
  render() {
    const { clients } = this.props.client;
    return (
      <div>
        <Modal
          isOpen={this.props.modal.isDetailsModalOpen}
          toggle={this.toggle}
          style={{ padding: "50px" }}
        >
          <ModalHeader toggle={this.toggle}> Client Details</ModalHeader>
          <ModalBody>
            <ListGroup>{clients.map(this.displayClientDetails)}</ListGroup>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ClientDetailsModal.propTypes = {
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.client,
  modal: state.modal,
});

export default connect(mapStateToProps, {
  openDetailsModal,
  closeDetailsModal,
})(ClientDetailsModal);
