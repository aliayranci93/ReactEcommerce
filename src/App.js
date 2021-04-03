import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Col, Container, Row } from 'reactstrap';
import React, { Component } from "react";

export default class App extends Component {

  state = {
    categories: [],
    products: [],
    currentCategory: "",
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
    let url ="http://localhost:3000/products";
    if(categoryId){
      url+="?categoryId="+categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount(){
    this.getCategories();
    this.getProducts();
}

  render() {
    let productInfo={title:"Product List"};
    let categoryInfo={title:"Category List"};
    return (
    <div className="App">
      <Container>
      <Row>
      <Navi></Navi>
            </Row>
        <Row>
          <Col xs="3">
          <CategoryList changeCategory={this.changeCategory} categories={this.state.categories}  info={categoryInfo}></CategoryList>
          </Col>
          <Col xs="9">
          <ProductList products={this.state.products} info={productInfo}></ProductList>
          </Col>
  

        </Row>
      </Container>


    
    </div>
     );
  }

  }

