import { nanoid } from 'nanoid';

export const changeFilterAction = filter => {
  return {
    type: 'filter/changeFilter',
    payload: { filter },
  };
};

export const addContactAction = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContactAction = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: {
      id: contactId,
    },
  };
};
