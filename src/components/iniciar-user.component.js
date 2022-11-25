import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class IniciarUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserNit = this.onChangeUserNit.bind(this);
    this.onChangeUserContrasena = this.onChangeUserContrasena.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nit: "",
      contrasena: "",
    };
  }

  onChangeUserNit(e) {
    this.setState({ nit: e.target.value });
  }
  onChangeUserContrasena(e) {
    this.setState({ contrasena: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userObject = {
      nit: this.state.name,
      contrasena: this.state.contrasena,
    };

    axios
      .post("http://localhost:4000/users/user-student", userObject)
      .then((res) => console.log(res.data));
    this.setState({ nit: "", contrasena: "" });
  }
  render() {
    return (
      <div class="for-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Cédula</Form.Label>
            <Form.Control
              className="mt-1 mb-1"
              type="text"
              value={this.state.nit}
              onChange={this.onChangeUserNit}
            />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              className="mt-1 mb-1"
              type="text"
              value={this.state.contrasena}
              onChange={this.onChangeUserContrasena}
            />
          </Form.Group>
          <Button
            variant="danger"
            size="monospace"
            block="block"
            type="submit"
            className="mt-2"
          >
            Iniciar Sesión
          </Button>
        </Form>
      </div>
    );
  }
}