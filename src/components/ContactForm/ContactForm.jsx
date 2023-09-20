import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  Form,
  Label,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handelChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addContact({ name, number });
    reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          onChange={handelChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          id={nameInputId}
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          onChange={handelChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          id={numberInputId}
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
