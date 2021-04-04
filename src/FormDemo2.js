import alertify from "alertifyjs";
import React, { Component } from "react";
import { FormGroup, Input, Label,Button } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "", userName: "" };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    debugger;
    event.preventDefault(); ///kullanmassan memorydeki dataları kaybedersin.
    alertify.success(this.state.email + " emaili veritabanına kaydedildi.");
    alertify.success(this.state.password + " emaili veritabanına kaydedildi.");
    alertify.success(this.state.city + " emaili veritabanına kaydedildi.");
    alertify.success(this.state.description + " emaili veritabanına kaydedildi.");
    alertify.success(this.state.userName + " emaili veritabanına kaydedildi.");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
        <FormGroup>
        <Label for="email">Email</Label>
          <Input
            name="email"
            onChange={this.onChangeHandler}
            type="email" placeholder="Lütfen Email giriniz  "
          ></Input>

        <Label for="password">Şifre</Label>
          <Input
            name="password"
            onChange={this.onChangeHandler}
            type="password"
          ></Input>


        <Label for="username">UserName</Label>
          <Input
            name="userName"
            onChange={this.onChangeHandler}
            type="text"
            id="userName"
          ></Input>

        <Label for="description">Description</Label>
          <Input
            name="description"
            onChange={this.onChangeHandler}
            type="textarea"
            id="description"
          ></Input>

        </FormGroup>
        <FormGroup>
        <Label for="city">City</Label>
            <Input type="select" name="city" id="city"  onChange={this.onChangeHandler}>
                <option value="06">Ankara</option>
                <option value="34">İstanbul</option>
                <option value="06">Ankara</option>
                <option value="06">Ankara</option>
                <option value="06">Ankara</option>
                <option value="06">Ankara</option>
            </Input>
        </FormGroup>

         <Button type="submit">Save</Button>
        </form>
      </div>
    );
  }
}
