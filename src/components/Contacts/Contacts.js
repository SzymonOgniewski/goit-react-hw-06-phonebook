import React from 'react';
import PropTypes from 'prop-types';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import css from './contacts.module.css';

export const Contacts = ({
  contactsArr,
  filter,
  handleChange,
  handleRemove,
}) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        contactsArr={contactsArr}
        filter={filter}
        handleRemove={handleRemove}
      />
    </div>
  );
};
Contacts.propTypes = {
  handleChange: PropTypes.func,
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
