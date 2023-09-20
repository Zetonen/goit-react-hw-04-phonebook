import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { getContacts, addContacts } from 'services/contact-api';
import { Section, Title, SubTitle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = getContacts();
    if (contacts) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      addContacts(contacts);
    }
  };

  addContact = contact => {
    const isInContacts = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
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
      const contacts = prevState.contacts.filter(({ id }) => id !== contactId);
      addContacts(contacts);
      return {
        contacts,
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
