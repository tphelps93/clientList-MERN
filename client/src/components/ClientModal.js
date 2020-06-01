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
import { addClient } from "../actions/clientActions";
import PropTypes from "prop-types";

class ClientModal extends Component {
  state = {
    modal: false,
  };

  componentDidMount() {
    this.props.addClient();
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

    const newClient = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
    };

    // Add client via addClient action
    this.props.addClient(newClient);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      // Split button into separate component
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem", marginLeft: "1rem" }}
          onClick={this.toggle}
        >
          Add Client
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Add To Client List</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name"> Name </Label>
                <Input
                  type="text"
                  name="name"
                  id="client"
                  placeholder="Add name"
                  onChange={this.onChange}
                ></Input>
                <Label for="email"> Email </Label>
                <Input
                  type="text"
                  name="email"
                  id="client"
                  placeholder="Add email"
                  onChange={this.onChange}
                ></Input>
                {/* <Label for="birthday"> Birthday </Label>
                <Input
                  type="date"
                  name="birthday"
                  id="client"
                  placeholder="Add number"
                  onChange={this.onChange} */}
                {/* ></Input> */}
                {/* <Label for="gender"> Gender </Label>
                <Input
                  type="select"
                  name="gender"
                  id="client"
                  onChange={this.onChange}
                >
                  <option> Female </option>
                  <option> Male</option>
                </Input> */}
                {/* <Label for="weight"> Weight - in lbs</Label>
                <Input
                  type="number"
                  name="weight"
                  id="client"
                  placeholder="Add weight"
                  onChange={this.onChange}
                ></Input>
                <Label for="height"> Height - in inches</Label>
                <Input
                  type="number"
                  name="height"
                  id="client"
                  placeholder="Add height"
                  onChange={this.onChange}
                ></Input>
                <Label for="bodyfat"> BodyFat - in % </Label>
                <Input
                  type="number"
                  name="bodyfat"
                  id="client"
                  placeholder="Add bodyfat"
                  onChange={this.onChange}
                ></Input> */}
                <Label for="number"> Number </Label>
                <Input
                  type="text"
                  name="number"
                  id="client"
                  placeholder="Add number"
                  onChange={this.onChange}
                ></Input>
                {/* <Label for="notes"> Notes </Label>
                <Input
                  type="textarea"
                  name="notes"
                  id="client"
                  placeholder="Add notes"
                  onChange={this.onChange}
                  minLength="10"
                ></Input> */}
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Client
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ClientModal.propTypes = {
  addClient: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps, { addClient })(ClientModal);
