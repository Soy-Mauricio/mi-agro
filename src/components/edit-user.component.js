import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserLastname = this.onChangeUserLastname.bind(this);
    this.onChangeUserDocument = this.onChangeUserDocument.bind(this);
    this.onChangeUserCellPhone = this.onChangeUserCellPhone.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      lastname: "",
      document: "",
      cellphone: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/users/edit-user/" +
        this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          lastname: res.data.lastname,
          document: res.data.document,
          cellphone: res.data.cellphone,
          email: res.data.email,
          password: res.data.password,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeUserLastname(e) {
    this.setState({ lastname: e.target.value });
  }

  onChangeUserDocument(e) {
    this.setState({ document: e.target.value });
  }

  onChangeUserCellPhone(e) {
    this.setState({ cellphone: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      lastname: this.state.lastname,
      document: this.state.document,
      cellphone: this.state.cellphone,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .put(
        "http://localhost:4000/users/update-user/" +
        this.props.match.params.id,
        userObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("User successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/user-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className="mt-1 mb-1"
              type="text"
              value={this.state.name}
              onChange={this.onChangeUserName}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              className="mt-1 mb-1"
              type="text"
              value={this.state.lastname}
              onChange={this.onChangeUserLastname}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Cédula</Form.Label>
            <Form.Control
              className="mt-1 mb-1"
              type="text"
              value={this.state.document}
              onChange={this.onChangeUserDocument}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              className="mt-1 mb-1"
              type="text"
              value={this.state.cellphone}
              onChange={this.onChangeUserCellPhone}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              className="mt-1 mb-1"
              type="email"
              value={this.state.email}
              onChange={this.onChangeUserEmail}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Código</Form.Label>
            <Form.Control
              className="mt-1 mb-1"
              type="text"
              value={this.state.password}
              onChange={this.onChangeUserPassword}
            />
          </Form.Group>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-2 mb-2"
          >
            Actualizar Usuario
          </Button>
        </Form>
      </div>
    );
  }
}