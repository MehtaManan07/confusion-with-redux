import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleReserveModal = this.toggleReserveModal.bind(this);

    this.state = {
      isNavOpen: false,
      isLoginModalOpen: false,
      isReserveModalOpen: false,
    };
  }

  toggleLoginModal() {
    this.setState({
      isLoginModalOpen: !this.state.isLoginModalOpen,
    });
  }

  toggleReserveModal() {
    this.setState({
      isReserveModalOpen: !this.state.isReserveModalOpen,
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  handleLogin(event) {
    var values = "";
    if (!this.remember.checked) {
      values = "No";
    } else {
      values = "Yes";
    }
    this.toggleLoginModal();
    alert(
      "Username: " +
        this.username.value +
        "\nPassword: " +
        this.password.value +
        "\nRemember: " +
        values
    );
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button outline onClick={this.toggleLoginModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
                <Button
                  color="warning"
                  outline
                  onClick={this.toggleReserveModal}
                >
                  Reserve a table
                </Button>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal
          isOpen={this.state.isLoginModalOpen}
          toggle={this.toggleLoginModal}
        >
          <ModalHeader toggle={this.toggleLoginModal}>
            Table reservation
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.isReserveModalOpen}
          toggle={this.toggleReserveModal}
        >
          <ModalHeader
            className="reserveModal"
            toggle={this.toggleReserveModal}
          >
            Table Reservation
          </ModalHeader>
          <ModalBody className="reserveModal">
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstname">First Name</Label>
                    <Input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastname">Last Name</Label>
                    <Input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last Name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@xyz.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="reservationYype">Reservation type</Label>
                <Input type="select">
                  <option>Dinner</option>
                  <option>VIP/Mezzanine</option>
                  <option>Birthday/Anniversary</option>
                  <option>Nightlife</option>
                  <option>Private</option>
                  <option>Wedding</option>
                  <option>Corporate</option>
                  <option>Holiday</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="guests">No. of guests</Label>
                <Input type="number" name="guests" id="guests" />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="date" name="date" id="date" />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleState">Time(from)</Label>
                    <Input type="time" name="state" id="exampleState" />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleZip">Time(to)</Label>
                    <Input type="time" name="zip" id="exampleZip" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Button>Book</Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Header;
