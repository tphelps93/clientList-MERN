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
import { editClient } from "../actions/clientActions";
import PropTypes from "prop-types";

class ClientEditModal extends Component {
  state = {
    modal: false,
  };

  componentDidMount() {
    this.props.editClient();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    // Close modal
    this.toggle();
  };

  render() {
    const { clients } = this.props.client;
    return (
      // Split button into separate component
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem", marginLeft: "1rem" }}
          onClick={this.toggle}
        >
          Edit
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Edit</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
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
});

export default connect(mapStateToProps, { editClient })(ClientEditModal);
