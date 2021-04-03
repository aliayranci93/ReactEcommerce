import React, { Component } from 'react'
import { Table } from "reactstrap";
export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Category Id</th>
          <th>Product Name</th>
          <th>quantityPerUnit</th>
          <th>unitPrice</th>
          <th>unitsInStock</th>
        </tr>
      </thead>
      <tbody>
      {this.props.products.map((product) => (
        <tr>
          <th scope="row">{product.id}</th>
          <td>{product.categoryId}</td>
          <td>{product.productName}</td>
          <td>{product.quantityPerUnit}</td>
          <td>{product.unitPrice}</td>
          <td>{product.unitsInStock}</td>
        </tr>
             ))}
      </tbody>
    </Table>
            </div>
        )
    }
}
