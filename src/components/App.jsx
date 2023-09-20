import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getContacts, addContacts } from 'services/contact-api';
import { Section, Title, SubTitle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = getContacts();
    if (contacts) {
      setContacts(contacts);
    }
  }, []);
  const addContact = contact => {
    const isInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { ...contact, id: nanoid() }]);
  };
  useEffect(() => {
    if (contacts.length === 0) {
      return;
    }
    addContacts(contacts);
  }, [contacts]);

  const onChangeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
    addContacts(contacts.filter(({ id }) => id !== contactId));
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        // Фильтр для отображения контактов
        <Filter value={filter} onChangeFilter={onChangeFilter} />
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}

      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </Section>
  );
};
