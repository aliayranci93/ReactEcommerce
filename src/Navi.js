import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><Link to="/"> Nortwind Appt</Link></NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
              <Nav className="mr-auto" navbar>
              <NavItem>
              <Link to="/form1">Form1 Demo</Link>
            </NavItem>
            <NavItem>
              <Link to="/form2">Form2 Demo</Link>
            </NavItem>
           </Nav>
          </Collapse>
          <Nav className="mr-auto" navbar>
              <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}></CartSummary>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
