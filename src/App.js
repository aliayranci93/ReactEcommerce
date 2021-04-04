import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = {
    categories: [],
    products: [],
    currentCategory: "",
    cart: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  addToCart = (product) => {
    debugger;
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(
      product.productName + " Ürünü Sepete Başarıyla Eklendi.",
      3
    );
  };
  removeFromCart = (product) => {
    debugger;
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(
      product.productName + " Ürünü Sepetten Başarıyla Silindi.",
      3
    );
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div className="App">
        <Container>
          <Navi
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
          ></Navi>

          <Row>
            <Col xs="3">
              <CategoryList
                changeCategory={this.changeCategory}
                categories={this.state.categories}
                info={categoryInfo}
                currentCategory={this.state.currentCategory}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props} //propların kopyasını al onu gönder
                      addToCart={this.addToCart}
                      products={this.state.products}
                      info={productInfo}
                    ></ProductList>
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props} //propların kopyasını al onu gönder
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    ></CartList>
                  )}
                />
                    <Route
                  exact
                  path="/form1"
                  render={(props) => (
                    <FormDemo1
                      {...props} //propların kopyasını al onu gönder
                     
                    ></FormDemo1>
                  )}
                />

                  <Route
                  exact
                  path="/form2"
                  render={(props) => (
                    <FormDemo2
                      {...props} //propların kopyasını al onu gönder
                     
                    ></FormDemo2>
                  )}
                />

                
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
