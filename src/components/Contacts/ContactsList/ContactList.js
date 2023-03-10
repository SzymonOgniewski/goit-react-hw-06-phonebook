import React from 'react';
import css from './contactlist.module.css';
import { getContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const list = contacts.map(contact => (
    <li key={contact.id} className={css.item}>
      <Contact contact={contact} />
    </li>
  ));

  return <ul className={css.list}>{list}</ul>;
};
