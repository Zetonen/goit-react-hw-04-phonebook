import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  Form,
  Label,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handelChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            onChange={this.handelChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            id={this.nameInputId}
            required
          />
        </Label>
        <Label htmlFor={this.numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            onChange={this.handelChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            id={this.numberInputId}
            required
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
