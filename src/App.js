import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";
import IniciarUser from "./components/iniciar-user.component";
import FrenteUser from "./components/frente-user.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/frente-user"} className="nav-link">
                  Mi Agro
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">

                <Nav>
                  <Link to={"/frente-user"} className="nav-link">
                    Inicio
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/user-list"} className="nav-link">
                    Lista de Usuarios
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/create-user"} className="nav-link">
                    Registrarse
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/iniciar-user"} className="nav-link">
                    Iniciar Sesión
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateUser {...props} />}
                  />
                  <Route
                    exact
                    path="/create-user"
                    component={(props) => <CreateUser {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-user/:id"
                    component={(props) => <EditUser {...props} />}
                  />
                  <Route
                    exact
                    path="/user-list"
                    component={(props) => <UserList {...props} />}
                  />
                  <Route
                    exact
                    path="/iniciar-user"
                    component={(props) => <IniciarUser {...props} />}
                  />
                  <Route
                    exact
                    path="/frente-user"
                    component={(props) => <FrenteUser {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
//