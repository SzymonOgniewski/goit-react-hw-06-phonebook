import { nanoid } from 'nanoid';

export const changeData = filter => {
  return {
    type: 'data/changeData',
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
