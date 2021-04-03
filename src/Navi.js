import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nortwind App</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
      
         
          </Collapse>
          <Nav className="mr-auto" navbar>
              <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}></CartSummary>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
