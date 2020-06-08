import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { editClient, setClientToEdit } from "../actions/clientActions";
import { openEditModal, closeEditModal } from "../actions/modalActions";
import PropTypes from "prop-types";

class ClientEditModal extends Component {
  componentDidMount() {
    this.props.editClient();
  }

  toggle = () => {
    if (this.props.modal.isEditModalOpen) this.props.closeEditModal();
    else this.props.openEditModal();
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    // Close modal
    this.toggle();
  };

  displayClient = (clients, _id) => {
    return (
      <FormGroup key={_id} timeout={500} classNames="fade">
        <Label for="name"> Name </Label>
        <Input
          type="text"
          name="name"
          id="client"
          value={clients.name}
          onChange={this.onChange}
        ></Input>

        <Label for="email"> Email </Label>
        <Input
          type="text"
          name="email"
          id="client"
          value={clients.email}
          onChange={this.onChange}
        ></Input>

        <Label for="number"> Number </Label>
        <Input
          type="text"
          name="number"
          id="number"
          value={clients.number}
          onChange={this.onChange}
        ></Input>

        <Button color="dark" style={{ marginTop: "2rem" }} block>
          Submit Client Edit
        </Button>
      </FormGroup>
    );
  };

  render() {
    const { clients } = this.props.client;
    return (
      // Split button into separate component
      <div>
        <Modal
          isOpen={this.props.modal.isEditModalOpen}
          toggle={this.toggle}
          style={{ padding: "50px" }}
        >
          <ModalHeader toggle={this.toggle}> Edit Client</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              {clients.map(this.displayClient)}
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ClientEditModal.propTypes = {
  editClient: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.client,
  modal: state.modal,
});

export default connect(mapStateToProps, {
  editClient,
  openEditModal,
  closeEditModal,
  setClientToEdit,
})(ClientEditModal);
