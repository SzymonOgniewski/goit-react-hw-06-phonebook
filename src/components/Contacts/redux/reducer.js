const contactsInitState =
  JSON.parse(localStorage.getItem('savedContacts')) || [];
export const contactsReducer = (state = contactsInitState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const { id, name, number } = action.payload;
      console.log(state.contacts);
      console.log(id, name, number);
      console.log(state);
      return {
        contacts: state.concat({ id, name, number }),
      };
    }
    case 'contacts/deleteContact': {
      const { id } = action.payload;
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== id),
      };
    }
    default:
      return state;
  }
};

const filterInitState = '';
export const filterReducer = (state = filterInitState, action) => {
  switch (action.type) {
    case 'filter/changeFilter': {
      const { filter } = action.payload;
      return {
        ...state,
        filter: (state = filter),
      };
    }
    default:
      return state;
  }
};
