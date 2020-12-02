import React from 'react';
import axios from 'axios';
import { Container, Form, Label, H3, Button, Input } from './apiPostElements';

export default class PersonList extends React.Component {
  state = {
    name: '',
    idade: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleChangeY = event => {
    this.setState({ idade: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      idade: this.state.idade,
    };


    axios.post(`http://localhost:3000/create`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            <H3>Person name</H3>
            <Input type="text" name="name" onChange={this.handleChange} />
          </Label>
          <Label>
            <H3>Person year</H3>
            <Input type="text" name="name" onChange={this.handleChangeY} />
          </Label>
          <Button type="submit">Add</Button>
        </Form>
      </Container>
    )
  }
}