import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            {name + ' : ' + number}
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
