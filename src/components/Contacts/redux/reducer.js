const initialState = {
  contacts: JSON.parse(localStorage.getItem('savedContacts')) || [],
  filter: '',
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const { id, name, number } = action.payload;
      return {
        ...state,
        contacts: state.contacts.concat({ id, name, number }),
      };
    }
    case 'contacts/deleteContact': {
      const { id } = action.payload;
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== id),
      };
    }
    case 'filter/changeFilter': {
      const { filter } = action.payload;
      return {
        ...state,
        filter: (state.filter = filter),
      };
    }
    default:
      return state;
  }
};
