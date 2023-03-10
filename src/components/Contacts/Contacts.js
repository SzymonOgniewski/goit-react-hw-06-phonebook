import React from 'react';
import { ContactList } from './ContactsList/ContactList';
import css from './contacts.module.css';

export const Contacts = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contacts</h2>
      <ContactList />
    </div>
  );
};
