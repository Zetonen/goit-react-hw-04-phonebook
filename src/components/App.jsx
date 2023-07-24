import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section, Title, SubTitle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const isInContacts = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };

  onChangeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };
  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        {this.state.contacts.length > 0 ? (
          // Фильтр для отображения контактов
          <Filter
            value={this.state.filter}
            onChangeFilter={this.onChangeFilter}
          />
        ) : (
          <p>Your phonebook is empty. Add first contact!</p>
        )}

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Section>
    );
  }
}
